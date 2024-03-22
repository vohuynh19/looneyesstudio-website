interface INews {
  id: string;
  title: string;
  subTitle: string;
  imageUri: string;

  categories: ICategory[];

  author: string;
  createdAt: string;

  updatedAt?: string;
  markdownContent?: string;
}

interface ICategory {
  id: string;
  name: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  content: string;
  updatedAt: string;
  createdAt: string;
}

interface IImage {
  id: string;
  name: string;
  url: string;
  updatedAt: string;
  createdAt: string;
}

interface IConfig {
  id: string;
  email: string;
  phone: string;
  facebook: string;
  youtube: string;
  tiktok: string;
  address1: string;
  address2: string;
}
