import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db, storage } from "../init";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import moment from "moment";
import { toast } from "react-toastify";

export const getPageImages = async (take = 10000): Promise<IImage[]> => {
  const dataQuery = query(
    collection(db, "images"),
    orderBy("updatedAt", "desc"),
    limit(take),
  );
  return (await getDocs(dataQuery)).docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as IImage[];
};

export const uploadAndSaveImage = async (imageFile: File, name: string) => {
  const downloadURL = await uploadImage(imageFile);
  await saveUrlImage(downloadURL, name);
  toast.success(`Tải ảnh thành công: ${name}`);
};

export const saveUrlImage = (url: string, name: string) => {
  const collectionRef = collection(db, "images");
  return addDoc(collectionRef, {
    url,
    name,
    updatedAt: moment().toString(),
    createdAt: moment().toString(),
  });
};

export const uploadImage = (
  imageFile: File,
  onProgress?: (p: number) => void,
) =>
  new Promise<string>((resolve, reject) => {
    const storageRef = ref(storage, `images/${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
        onProgress?.(progress);
      },
      (error) => {
        reject(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(downloadURL);
      },
    );
  });

export const deleteImage = (id: string) => {
  const ref = doc(db, "images", id);
  return deleteDoc(ref);
};
