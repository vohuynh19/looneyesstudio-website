import AdminLayout from "@/layouts/admin";
import { useAuthRoute } from "@/firebase/useAuthRoute";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getPageNews } from "@/firebase/modules/news";
import { SyncLoader } from "react-spinners";
import { title } from "@/components/primitives";
import clsx from "clsx";
import { ListNewsSection } from "@/components/sections";

export default function IndexPage() {
  useAuthRoute();

  const router = useRouter();

  const { data, isFetching } = useQuery({
    queryKey: ["news", "page"],
    queryFn: () => getPageNews(),
  });

  return (
    <AdminLayout>
      <div className="w-full h-full flex justify-center items-center">
        <Button
          className="mb-8"
          onClick={() => router.push("/admin/news/create")}
        >
          Tạo tin tức
        </Button>
      </div>

      <div className="w-full h-full flex justify-center items-center">
        {isFetching && (
          <div className="w-screen h-screen flex justify-center items-center absolute">
            <SyncLoader color="#524FFF" />
          </div>
        )}

        {data?.length === 0 && (
          <div
            className={clsx(
              title({
                size: "lg",
                color: "white",
              }),
              "text-center w-full mt-24",
            )}
          >
            Opps, hiện tại chưa có tin tức nào
          </div>
        )}
      </div>

      <ListNewsSection
        searchEnabled
        onClick={(id) => router.push(`/admin/news/${id}`)}
      />
    </AdminLayout>
  );
}
