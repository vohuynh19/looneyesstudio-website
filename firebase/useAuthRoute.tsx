import { useRouter } from "next/router";
import { useAuth } from "./context";
import { useEffect } from "react";

export const useAuthRoute = () => {
  const { authUser, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authUser) router.push("/admin/login");
  }, [router, authUser, loading]);
};
