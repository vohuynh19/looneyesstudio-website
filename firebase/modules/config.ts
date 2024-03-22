import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../init";
import moment from "moment";

export const createConfig = async ({
  email,
  phone,
  facebook,
  youtube,
  tiktok,
  address,
}: {
  email: string;
  phone: string;
  facebook: string;
  youtube: string;
  tiktok: string;
  address: string;
}) => {
  const collectionRef = collection(db, "config");
  return addDoc(collectionRef, {
    id: "1",
    email,
    phone,
    facebook,
    youtube,
    tiktok,
    address,
    updatedAt: moment().toString(),
    createdAt: moment().toString(),
  });
};

export const getConfig = async () => {
  const dataQuery = query(collection(db, "config"));
  const data = (
    (await getDocs(dataQuery)).docs.map((doc) => {
      doc.ref;
      return {
        ...doc.data(),
      };
    }) as IConfig[]
  ).filter((i) => i.id === "1")[0];
  return data;
};

export const updateConfig = async ({
  email,
  phone,
  facebook,
  youtube,
  tiktok,
  address1,
  address2,
}: {
  email: string;
  phone: string;
  facebook: string;
  youtube: string;
  tiktok: string;
  address1: string;
  address2: string;
}) => {
  const dataQuery = query(collection(db, "config"));
  (await getDocs(dataQuery)).docs.map(async (doc) => {
    const { id } = doc.data() as IConfig;

    if (id === "1") {
      const res = await updateDoc(doc.ref, {
        id: "1",
        email,
        phone,
        facebook,
        youtube,
        tiktok,
        address1,
        address2,
        updatedAt: moment().toString(),
        createdAt: moment().toString(),
      });
      return res;
    }
  });
};
