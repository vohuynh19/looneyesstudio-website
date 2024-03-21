import { fontSairaCondensed } from "@/config/fonts";
import { Link, Navbar, NavbarContent } from "@nextui-org/react";
import clsx from "clsx";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Head } from "./head";
import { siteConfig } from "@/config/site";

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const route = useRouter();

  return (
    <div className="min-h-screen w-full bg-black">
      <Head />

      <Navbar shouldHideOnScroll className="bg-transparent">
        <NavbarContent
          className="text-base flex flex-1 justify-center items-center"
          justify="center"
        >
          {siteConfig.admin.map((site) => (
            <NextLink key={site.href} href={site.href}>
              <Link
                // color={site.href === route.asPath ? "primary" : 'success'}
                size="lg"
                className={clsx(
                  fontSairaCondensed.className,
                  `font-black text-base mb-8 ${site.href === route.asPath ? "text-primary" : "text-white"}`,
                )}
              >
                {site.label}
              </Link>
            </NextLink>
          ))}
        </NavbarContent>
      </Navbar>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
