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
import { db } from "../init";
import moment from "moment";

export const getAllUser = async (take = 10000) => {
  const dataQuery = query(
    collection(db, "users"),
    orderBy("updatedAt", "desc"),
    limit(take),
  );
  return (await getDocs(dataQuery)).docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as IUser[];
};

export const registerUser = async ({
  email,
  name = "",
  content = "",
}: {
  email: string;
  name?: string;
  content?: string;
}) => {
  const collectionRef = collection(db, "users");

  // Check if the email already exists
  const querySnapshot = await getDocs(
    query(collectionRef, where("email", "==", email)),
  );
  if (!querySnapshot.empty) {
    throw new Error("Email already exists");
  }

  return addDoc(collectionRef, {
    name,
    email,
    content,
    updatedAt: moment().toString(),
    createdAt: moment().toString(),
  });
};

export const deleteUserById = (id: string) => {
  const ref = doc(db, "users", id);
  return deleteDoc(ref);
};
