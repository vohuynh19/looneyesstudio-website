import { Navbar } from "@/components/navbar";
import { Head } from "./head";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <div className="fixed z-50 w-full">
        <Navbar />
      </div>
      {children}
    </div>
  );
}
