import AdminLayout from "@/layouts/admin";
import { useAuthRoute } from "@/firebase/useAuthRoute";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { deleteUserById, getAllUser } from "@/firebase/modules/user";
import { SyncLoader } from "react-spinners";
import moment from "moment";
import { logout } from "@/firebase/modules/auth";
import { Key } from "react";
import { toast } from "react-toastify";

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
  {
    key: "action",
    label: "Hành động",
  },
];

export default function IndexPage() {
  useAuthRoute();

  const { data, isFetching, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: () => getAllUser(),
  });

  const renderCol = (item: IUser, key: Key) => {
    if (key.toString() === "createdAt") {
      return `${moment(getKeyValue(item, key)).format("hh:mm DD t\\háng MM YYYY")}`;
    }

    if (key.toString() === "action") {
      return (
        <Button
          color="danger"
          onClick={async () => {
            try {
              await deleteUserById(item.id);
              toast.success(`Xoá khách hàng thành công: ${item.email}`);
              refetch();
            } catch (error) {
              toast.error("Xoá khách hàng thất bại");
            }
          }}
        >
          Xoá
        </Button>
      );
    }

    return getKeyValue(item, key);
  };

  return (
    <AdminLayout>
      {isFetching && (
        <div className="w-screen h-screen flex justify-center items-center absolute">
          <SyncLoader color="#524FFF" />
        </div>
      )}
      <div className="flex justify-center mb-8">
        <Button variant="ghost" color="danger" onClick={() => logout()}>
          Đăng xuất
        </Button>
      </div>
      <Table className="dark">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>

        <TableBody items={data || []}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell className="!text-white">
                  {renderCol(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </AdminLayout>
  );
}
