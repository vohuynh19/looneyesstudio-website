import { Navbar } from "@/components/navbar";
import { Head } from "./head";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head />
      <div className="relative flex flex-col h-screen">
        <div className="fixed z-50 w-full">
          <Navbar />
        </div>
        {children}
      </div>
    </>
  );
}
