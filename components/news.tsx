import Image from "next/image";
import { FC } from "react";
import { DateIcon } from "./icons";
import { subtitle, tag, title } from "./primitives";
import clsx from "clsx";
import moment from "moment";
import ImageFallback from "./image";

const failbackImg =
  "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=";
export const mockNewsData: INews[] = [
  {
    id: "1",
    title: "Sự kiện Quảng Cáo Sáng Tạo 2023",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor.. Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor...",
    imageUri:
      "https://media.cnn.com/api/v1/images/stellar/prod/meta-quest-3-accessories-lead-cnnu.jpg?c=original",
    categories: [
      {
        id: "123",
        name: "Dự án",
      },
    ],
    author: "Admin",
    createdAt: "2024-03-14T16:08:43.161Z",
    updatedAt: "2024-03-14T16:08:43.161Z",
  },
  {
    id: "2",
    title: "20 Năm thành phố Cần Thơ trực thuộc Trung Ương",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor.. Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor...",
    // imageUri: "/images/service-1.png",
    imageUri:
      "https://media.cnn.com/api/v1/images/stellar/prod/meta-quest-3-accessories-lead-cnnu.jpg?c=original",
    categories: [
      {
        id: "123",
        name: "Dự án",
      },
    ],
    author: "Admin",
    createdAt: "2024-03-14T16:08:43.161Z",
    updatedAt: "2024-03-14T16:08:43.161Z",
  },
  {
    id: "3",
    title: "20 năm thành lập Tỉnh Hậu Giang",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor.. Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor...",
    imageUri:
      "https://media.cnn.com/api/v1/images/stellar/prod/meta-quest-3-accessories-lead-cnnu.jpg?c=original",
    categories: [
      {
        id: "123",
        name: "Dự án",
      },
    ],
    author: "Admin",
    createdAt: "2024-03-14T16:08:43.161Z",
    updatedAt: "2024-03-14T16:08:43.161Z",
  },
  {
    id: "4",
    title: "Quảng bá ra mắt phim GodzillaxKong Đế Chế Mới tối 30 Tết",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor.. Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor...",
    imageUri:
      "https://media.cnn.com/api/v1/images/stellar/prod/meta-quest-3-accessories-lead-cnnu.jpg?c=original",
    categories: [
      {
        id: "123",
        name: "Dự án",
      },
    ],
    author: "Admin",
    createdAt: "2024-03-14T16:08:43.161Z",
    updatedAt: "2024-03-14T16:08:43.161Z",
  },
  {
    id: "5",
    title: "Vietjet’s Night Sky chào đón tết Giáp Thìn",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor.. Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor...",
    imageUri:
      "https://media.cnn.com/api/v1/images/stellar/prod/meta-quest-3-accessories-lead-cnnu.jpg?c=original",
    categories: [
      {
        id: "123",
        name: "Dự án",
      },
    ],
    author: "Admin",
    createdAt: "2024-03-14T16:08:43.161Z",
    updatedAt: "2024-03-14T16:08:43.161Z",
  },
  {
    id: "6",
    title: "Vietjet’s Night Sky chào đón tết Giáp Thìn",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor.. Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor...",
    imageUri:
      "https://media.cnn.com/api/v1/images/stellar/prod/meta-quest-3-accessories-lead-cnnu.jpg?c=original",
    categories: [
      {
        id: "123",
        name: "Dự án",
      },
    ],
    author: "Admin",
    createdAt: "2024-03-14T16:08:43.161Z",
    updatedAt: "2024-03-14T16:08:43.161Z",
  },
  {
    id: "67",
    title: "Vietjet’s Night Sky chào đón tết Giáp Thìn",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor.. Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor...",
    imageUri:
      "https://media.cnn.com/api/v1/images/stellar/prod/meta-quest-3-accessories-lead-cnnu.jpg?c=original",
    categories: [
      {
        id: "123",
        name: "Dự án",
      },
    ],
    author: "Admin",
    createdAt: "2024-03-14T16:08:43.161Z",
    updatedAt: "2024-03-14T16:08:43.161Z",
  },
  {
    id: "8",
    title: "Vietjet’s Night Sky chào đón tết Giáp Thìn",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor.. Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor...",
    imageUri:
      "https://media.cnn.com/api/v1/images/stellar/prod/meta-quest-3-accessories-lead-cnnu.jpg?c=original",
    categories: [
      {
        id: "123",
        name: "Dự án",
      },
    ],
    author: "Admin",
    createdAt: "2024-03-14T16:08:43.161Z",
    updatedAt: "2024-03-14T16:08:43.161Z",
  },
  {
    id: "9",
    title: "Vietjet’s Night Sky chào đón tết Giáp Thìn",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor.. Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor...",
    imageUri:
      "https://media.cnn.com/api/v1/images/stellar/prod/meta-quest-3-accessories-lead-cnnu.jpg?c=original",
    categories: [
      {
        id: "123",
        name: "Dự án",
      },
    ],
    author: "Admin",
    createdAt: "2024-03-14T16:08:43.161Z",
    updatedAt: "2024-03-14T16:08:43.161Z",
  },
  {
    id: "10",
    title: "Vietjet’s Night Sky chào đón tết Giáp Thìn",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor.. Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor...",
    imageUri:
      "https://media.cnn.com/api/v1/images/stellar/prod/meta-quest-3-accessories-lead-cnnu.jpg?c=original",
    categories: [
      {
        id: "123",
        name: "Dự án",
      },
    ],
    author: "Admin",
    createdAt: "2024-03-14T16:08:43.161Z",
    updatedAt: "2024-03-14T16:08:43.161Z",
  },
  {
    id: "11",
    title: "Vietjet’s Night Sky chào đón tết Giáp Thìn",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor.. Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor...",
    imageUri:
      "https://media.cnn.com/api/v1/images/stellar/prod/meta-quest-3-accessories-lead-cnnu.jpg?c=original",
    categories: [
      {
        id: "123",
        name: "Dự án",
      },
    ],
    author: "Admin",
    createdAt: "2024-03-14T16:08:43.161Z",
    updatedAt: "2024-03-14T16:08:43.161Z",
  },
  {
    id: "12",
    title: "Vietjet’s Night Sky chào đón tết Giáp Thìn",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor.. Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor...",
    imageUri:
      "https://media.cnn.com/api/v1/images/stellar/prod/meta-quest-3-accessories-lead-cnnu.jpg?c=original",
    categories: [
      {
        id: "123",
        name: "Dự án",
      },
    ],
    author: "Admin",
    createdAt: "2024-03-14T16:08:43.161Z",
    updatedAt: "2024-03-14T16:08:43.161Z",
  },
];

export const NewsInListItem: FC<{
  newsData: INews;
  onClick?: (id: string) => void;
}> = ({ newsData, onClick }) => {
  const {
    id,
    categories,
    imageUri,
    title: newTitle,
    updatedAt,
    author,
    subTitle: newSubtitle,
  } = newsData;

  console.log("updatedAt", updatedAt);

  const DateItem = () => (
    <div
      className={clsx(
        subtitle({
          size: "base",
        }),
        "flex mt-2 items-center",
      )}
    >
      <DateIcon className="mr-2" />

      <div
        className={clsx(
          subtitle({
            size: "base",
            color: "grey",
          }),
          "mr-2",
        )}
      >{`${moment(updatedAt).format("DD t\\háng MM YYYY")}`}</div>

      <div className="mr-1" />

      <div
        className={clsx(
          subtitle({
            size: "base",
            color: "grey",
          }),
          "mr-2",
        )}
      >
        By
      </div>

      <div
        className={clsx(
          subtitle({
            size: "base",
            color: "white",
          }),
        )}
      >
        {author}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col mb-4">
      <div className="w-full cursor-pointer" onClick={() => onClick?.(id)}>
        {/*  */}
        <ImageFallback
          className="w-full h-full rounded-lg object-cover"
          width={1024}
          height={1024}
          alt="preview image"
          src={imageUri}
          fallbackSrc={failbackImg}
        />
      </div>

      <div className="mt-4">
        {/* {categories.map((category) => (
          <div className={clsx(tag(), "uppercase")} key={category.id}>
            {category.name}
          </div>
        ))} */}
      </div>

      <div
        className={clsx(
          title({
            color: "white",
            size: "sm1",
          }),
          "line-clamp-1 xl:line-clamp-2",
        )}
      >
        {newTitle}
      </div>

      <DateItem />

      <p
        className={clsx(
          subtitle({
            color: "white",
          }),
          "line-clamp-4",
        )}
      >
        {newSubtitle}
      </p>
    </div>
  );
};

export const NewsItem: FC<{
  newsData: INews;
  onClick?: (id: string) => void;
}> = ({ newsData, onClick }) => {
  const {
    id,
    categories,
    imageUri,
    title: newTitle,
    updatedAt,
    author,
    subTitle: newSubtitle,
  } = newsData;

  const DateItem = () => (
    <div
      className={clsx(
        subtitle({
          size: "base",
        }),
        "flex mt-2 items-center",
      )}
    >
      <DateIcon className="mr-2" />

      <div
        className={clsx(
          subtitle({
            size: "base",
            color: "grey",
          }),
          "mr-2",
        )}
      >{`${moment(updatedAt).format("DD t\\háng MM YYYY")}`}</div>

      <div className="mr-1" />

      <div
        className={clsx(
          subtitle({
            size: "base",
            color: "grey",
          }),
          "mr-2",
        )}
      >
        By
      </div>

      <div
        className={clsx(
          subtitle({
            size: "base",
            color: "white",
          }),
        )}
      >
        {author}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col">
      <div
        className="w-full h-[240px] sm:h-[320px] md:h-[200px] xl:h-[320px] cursor-pointer"
        onClick={() => onClick?.(id)}
      >
        <ImageFallback
          className="w-full h-full rounded-lg object-cover"
          width={1024}
          height={1024}
          alt="preview image"
          src={imageUri}
          fallbackSrc={failbackImg}
        />
      </div>

      <div className="mt-4">
        {/* {categories.map((category) => (
          <div className={clsx(tag(), "uppercase")} key={category.id}>
            {category.name}
          </div>
        ))} */}
      </div>

      <div
        className={clsx(
          title({
            color: "white",
            size: "sm1",
          }),
          "line-clamp-1 xl:line-clamp-2",
        )}
      >
        {newTitle}
      </div>

      <DateItem />

      <p
        className={clsx(
          subtitle({
            color: "white",
          }),
          "line-clamp-2 md:line-clamp-1 xl:line-clamp-2",
        )}
      >
        {newSubtitle}
      </p>
    </div>
  );
};
