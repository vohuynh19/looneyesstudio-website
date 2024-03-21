import AdminLayout from "@/layouts/admin";
import { useAuthRoute } from "@/firebase/useAuthRoute";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/router";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { NavigateButton } from "@/components/button";
import { title } from "@/components/primitives";
import clsx from "clsx";
import { toast } from "react-toastify";
import { createNews } from "@/firebase/modules/news";
import { SyncLoader } from "react-spinners";
import { useMutation } from "@tanstack/react-query";

const MarkdownEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

export default function IndexPage() {
  const [value, setValue] = useState<string | undefined>();
  const titleRef = useRef<HTMLInputElement>(null);
  const subtitleRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  useAuthRoute();

  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationKey: ["createnews"],
    mutationFn: () => onCreate(),
  });

  const onCreate = async () => {
    if (!titleRef.current || !subtitleRef.current || !imgRef.current || !value)
      return;
    const result = await createNews({
      title: titleRef.current.value,
      subTitle: subtitleRef.current.value,
      imageUri: imgRef.current.value,
      markdownContent: value,
    });
    toast.success(`Tạo tin tức thành công. ID:${result.id}`);
    router.push("/admin/news");
  };

  return (
    <AdminLayout>
      {isPending && (
        <div className="w-screen h-screen flex justify-center items-center absolute">
          <SyncLoader color="#524FFF" />
        </div>
      )}
      <div className="flex w-full flex-col justify-center items-center px-4">
        <div className="container w-full">
          <h1
            className={clsx(
              title({
                color: "white",
              }),
              "text-center mb-8",
            )}
          >
            Tạo tin tức
          </h1>

          <Input
            ref={titleRef}
            className="mb-4"
            label="Tiêu đề"
            placeholder="Nhập tiêu đề phụ"
            required
          />

          <Input
            ref={subtitleRef}
            className="mb-4"
            label="Tiêu đề phụ"
            placeholder="Nhập tiêu đề phụ"
            required
          />

          <Input
            ref={imgRef}
            className="mb-4"
            label="Link ảnh bìa"
            placeholder="Nhập link ảnh bìa"
            required
          />

          <div className="text-white mb-2">Bài viết chi tiết</div>
          <MarkdownEditor height={400} value={value} onChange={setValue} />

          <div className="text-center my-8">
            <NavigateButton isLoading={isPending} onClick={() => mutate()}>
              Tạo
            </NavigateButton>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
