import { collection, getDocs, query, updateDoc } from "firebase/firestore";
import { db, storage } from "../init";
import moment from "moment";
import { getDownloadURL, ref } from "firebase/storage";

export type PageUrl = "/" | "/intro" | "/news" | "/services" | "/contact";

export const getText = async (pageUrl: PageUrl) => {
  const storageRef = ref(storage, "translation.json");
  const jsonlink = await getDownloadURL(storageRef);
  const res = await fetch(jsonlink, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const toJson = await res.json();
  return toJson[pageUrl];
};

export const updateText = async ({
  data,
  pageUrl,
}: {
  pageUrl: PageUrl;
  data: Object;
}) => {
  const dataQuery = query(collection(db, "text"));
  const doc = (await getDocs(dataQuery)).docs.filter(
    (i) => i.data().pageUrl === pageUrl,
  )[0];

  return await updateDoc(doc.ref, {
    ...data,
    pageUrl: pageUrl,
    updatedAt: moment().toString(),
  });
};
