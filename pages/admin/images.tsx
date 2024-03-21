import AdminLayout from "@/layouts/admin";
import { useAuthRoute } from "@/firebase/useAuthRoute";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Pagination,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@nextui-org/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { SyncLoader } from "react-spinners";
import { useEffect, useRef, useState } from "react";
import {
  deleteImage,
  getPageImages,
  uploadAndSaveImage,
} from "@/firebase/modules/images";
import { toast } from "react-toastify";
import { queryClient } from "@/config/client";
import { subtitle } from "@/components/primitives";
import clsx from "clsx";

export const MarkdownEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

const columns = [
  {
    key: "createdAt",
    label: "Thời gian",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "name",
    label: "Tên",
  },
  {
    key: "content",
    label: "Nội dung",
  },
];

const LIST_LENGTH = 6;

export default function IndexPage() {
  useAuthRoute();
  const [imgSrc, setImgSrc] = useState<string>();
  const [search, setSearch] = useState<string>("");
  const imgNameRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const fileRef = useRef<File>();
  const [page, setPage] = useState(1);

  const { data: queryData, isFetching } = useQuery({
    queryKey: ["images", "admin"],
    queryFn: () => getPageImages(),
  });

  const { mutateAsync: upload, isPending: uploadPending } = useMutation({
    mutationKey: ["uploadImage"],
    mutationFn: (params: { file: File; name: string }) =>
      uploadAndSaveImage(params.file, params.name),
  });

  const { mutateAsync: deleteImg, isPending: deletePending } = useMutation({
    mutationKey: ["deleteImage"],
    mutationFn: (params: { id: string }) => deleteImage(params.id),
  });

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onChooseImage = (file?: File | null) => {
    if (!file || !imageRef.current) {
      return;
    }
    fileRef.current = file;
    imageRef.current.src = URL.createObjectURL(file);
    setImgSrc(imageRef.current.src);
  };

  const searchImages = queryData?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const data = searchImages?.filter((_, idx) => {
    return idx >= LIST_LENGTH * (page - 1) && idx < LIST_LENGTH * page;
  });

  useEffect(() => {
    if (!searchImages?.length || searchImages.length === 0) {
      return;
    }

    if (page > Math.ceil(searchImages.length / LIST_LENGTH)) {
      setPage(Math.ceil(searchImages.length / LIST_LENGTH));
    }
  }, [page, searchImages?.length]);

  return (
    <AdminLayout>
      {(deletePending || isFetching) && (
        <div className="w-screen h-screen flex justify-center items-center absolute">
          <SyncLoader color="#524FFF" />
        </div>
      )}

      <div className="flex w-full flex-col justify-center items-center px-4">
        <div className="container w-full flex flex-col justify-center items-center pb-8">
          <Button onPress={onOpen} className="mb-8">
            Thêm ảnh
          </Button>

          <Input
            placeholder="Search image by name"
            className="mb-8"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="grid grid-cols-3 gap-4">
            {data?.map((img) => {
              return (
                <div key={img.id}>
                  <img alt="img" src={img.url} />
                  <h3
                    className={clsx(
                      subtitle({
                        color: "white",
                      }),
                      "text-center",
                    )}
                  >
                    {img.name}
                  </h3>
                  <div className="flex justify-center items-center">
                    <Button
                      color="primary"
                      variant="ghost"
                      className="mr-4"
                      onClick={() => {
                        try {
                          navigator.clipboard.writeText(img.url);
                          toast.success(
                            `Sao chép đường dẫn thành công: ${img.url}`,
                          );
                        } catch (error) {
                          toast.error(
                            `Sao chép đường dẫn thất bại, vui lòng sao chép thủ công. Đường dẫn: ${img.url}`,
                          );
                        }
                      }}
                    >
                      Copy link ảnh
                    </Button>
                    <Popover placement="right">
                      <PopoverTrigger>
                        <Button color="danger">Xoá</Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">
                            Xoá hình ảnh
                          </div>
                          <div className="text-tiny">
                            Bạn có chắc chắn muốn xoá hình ảnh này?
                          </div>
                        </div>
                        <div className="flex my-2">
                          <Button
                            size="sm"
                            color="danger"
                            onClick={async () => {
                              await deleteImg({ id: img.id });
                              queryClient.invalidateQueries({
                                queryKey: ["images", "admin"],
                              });
                            }}
                          >
                            Xoá
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              );
            })}
          </div>

          {searchImages?.length &&
            data?.length &&
            searchImages?.length > 0 &&
            data?.length > 0 && (
              <Pagination
                page={page}
                onChange={(value) => setPage(value)}
                size="lg"
                showShadow
                color="primary"
                total={Math.ceil(searchImages?.length / LIST_LENGTH)}
                initialPage={1}
                classNames={{
                  base: "flex items-center justify-center mt-4",
                  item: "bg-transparent text-[#ffffff] hover:text-primary hover:!bg-transparent",
                  cursor: "text-primary font-bold bg-transparent",
                }}
              />
            )}
        </div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Tải ảnh</ModalHeader>
              <ModalBody>
                <Input
                  ref={imgNameRef}
                  label="Tên ảnh"
                  placeholder="Nhập tên ảnh"
                />
                <div className="mt-4">Chọn ảnh</div>
                <img
                  ref={imageRef}
                  className={`${imgSrc ? "block" : "hidden"}`}
                  alt="Input image"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => onChooseImage(e.target.files?.item(0))}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="secondary"
                  variant="light"
                  onPress={onClose}
                  isLoading={uploadPending}
                >
                  Đóng
                </Button>
                <Button
                  className="text-white"
                  color="primary"
                  isLoading={uploadPending}
                  onPress={async () => {
                    const name = imgNameRef.current?.value;
                    const file = fileRef.current;
                    if (name && file) {
                      await upload({
                        file,
                        name,
                      });
                      onClose();
                      queryClient.invalidateQueries({
                        queryKey: ["images", "admin"],
                      });
                    } else {
                      toast.error("Vui lòng nhập tên và chọn ảnh");
                    }
                  }}
                >
                  Tải ảnh
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </AdminLayout>
  );
}
