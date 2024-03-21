import {
  addDoc,
  collection,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  limit,
} from "firebase/firestore";
import { db } from "../init";
import moment from "moment";

function sortByDate(dateString1: string, dateString2: string) {
  return new Date(dateString1) < new Date(dateString2) ? 1 : -1;
}

const revalidateNewsById = (id: string) => {
  return fetch("/api/revalidate", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      path: `/news/${id}`,
    }),
  });
};

export const getPageNews = async (take = 10000): Promise<INews[]> => {
  const dataQuery = query(collection(db, "news"), limit(take));
  const data = (await getDocs(dataQuery)).docs.map((doc) => ({
    id: doc.id,
    categories: [
      {
        id: "1",
        name: "TIN TỨC",
      },
    ],
    ...doc.data(),
  })) as INews[];

  return data.sort((a, b) => sortByDate(a.updatedAt || "", b.updatedAt || ""));
};

export const getNews = async (id: string): Promise<INews> => {
  const ref = doc(db, "news", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) throw new Error("not-found"); // document missing
  return {
    id: snap.id,
    categories: [
      {
        id: "1",
        name: "TIN TỨC",
      },
    ],
    ...snap.data(),
  } as INews;
};

export const createNews = async ({
  title,
  subTitle,
  imageUri,
  markdownContent,
}: {
  title: string;
  subTitle: string;
  imageUri: string;
  markdownContent: string;
}) => {
  const collectionRef = collection(db, "news");
  const res = await addDoc(collectionRef, {
    author: "admin",
    title,
    subTitle,
    imageUri,
    markdownContent,
    updatedAt: moment().toString(),
    createdAt: moment().toString(),
  });
  await revalidateNewsById(res.id);
  return res;
};

export const updateNews = async ({
  id,
  title,
  subTitle,
  imageUri,
  markdownContent,
}: {
  id: string;
  title: string;
  subTitle: string;
  imageUri: string;
  markdownContent: string;
}) => {
  const ref = doc(db, "news", id);
  const res = await updateDoc(ref, {
    title,
    subTitle,
    imageUri,
    markdownContent,
    updatedAt: moment().toString(),
  });
  await revalidateNewsById(id);
  return res;
};

export const deleteNews = async (id: string) => {
  const ref = doc(db, "news", id);
  const res = await deleteDoc(ref);
  revalidateNewsById(id);
  return res;
};
