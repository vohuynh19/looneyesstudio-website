import AdminLayout from "@/layouts/admin";
import { useAuthRoute } from "@/firebase/useAuthRoute";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { Input } from "@nextui-org/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { SyncLoader } from "react-spinners";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { title } from "@/components/primitives";
import clsx from "clsx";
import { NavigateButton } from "@/components/button";
import { updateConfig, getConfig } from "@/firebase/modules/config";

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

export default function IndexPage() {
  useAuthRoute();
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const facebookRef = useRef<HTMLInputElement>(null);
  const tiktokRef = useRef<HTMLInputElement>(null);
  const youtubeRef = useRef<HTMLInputElement>(null);

  const { data, isFetching } = useQuery({
    queryKey: ["config"],
    queryFn: () => getConfig(),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["config"],
    mutationFn: updateConfig,
  });

  useEffect(() => {
    if (
      data &&
      phoneRef.current &&
      emailRef.current &&
      facebookRef.current &&
      tiktokRef.current &&
      youtubeRef.current
    ) {
      phoneRef.current.value = data.phone;
      emailRef.current.value = data.email;
      facebookRef.current.value = data.facebook;
      tiktokRef.current.value = data.tiktok;
      youtubeRef.current.value = data.youtube;
    }
  }, [data]);

  const onSave = async () => {
    try {
      mutateAsync({
        phone: phoneRef.current?.value || "",
        email: emailRef.current?.value || "",
        facebook: facebookRef.current?.value || "",
        tiktok: tiktokRef.current?.value || "",
        youtube: youtubeRef.current?.value || "",
      });
      toast.success("Cập nhật cấu hình thành công");
    } catch (error) {
      toast.error("Cập nhật cấu hình thất bại");
    }
  };

  return (
    <AdminLayout>
      {isFetching && (
        <div className="w-screen h-screen flex justify-center items-center absolute">
          <SyncLoader color="#524FFF" />
        </div>
      )}

      <div className="flex w-full flex-col justify-center items-center px-4">
        <div className="container w-full flex flex-col justify-center items-center pb-8">
          <div className="mb-8" />

          <div className="w-full grid grid-cols-2 gap-8">
            <div>
              <div
                className={clsx(
                  title({
                    color: "white",
                    size: "sm",
                  }),
                  "w-full mb-2 text-start",
                )}
              >
                Số điện thoại
              </div>
              <Input
                placeholder="Enter Facebook link"
                className="mb-8"
                ref={phoneRef}
              />
            </div>

            <div>
              <div
                className={clsx(
                  title({
                    color: "white",
                    size: "sm",
                  }),
                  "w-full mb-2 text-start",
                )}
              >
                Email
              </div>
              <Input
                placeholder="Enter Facebook link"
                className="mb-8"
                ref={emailRef}
              />
            </div>

            <div>
              <div
                className={clsx(
                  title({
                    color: "white",
                    size: "sm",
                  }),
                  "w-full mb-2 text-start",
                )}
              >
                Link Facebook
              </div>
              <Input
                placeholder="Enter Facebook link"
                className="mb-8"
                ref={facebookRef}
              />
            </div>

            <div>
              <div
                className={clsx(
                  title({
                    color: "white",
                    size: "sm",
                  }),
                  "w-full mb-2 text-start",
                )}
              >
                Link Tiktok
              </div>
              <Input
                placeholder="Enter Tiktok link"
                className="mb-8"
                ref={tiktokRef}
              />
            </div>

            <div>
              <div
                className={clsx(
                  title({
                    color: "white",
                    size: "sm",
                  }),
                  "w-full mb-2 text-start",
                )}
              >
                Link Youtube
              </div>
              <Input
                placeholder="Enter Youtube link"
                className="mb-8"
                ref={youtubeRef}
              />
            </div>
          </div>

          <NavigateButton isLoading={isPending} onPress={onSave}>
            Lưu
          </NavigateButton>
        </div>
      </div>
    </AdminLayout>
  );
}
