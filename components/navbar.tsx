import {
  Link,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarMenuItem,
} from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";

import Image from "next/image";
import { useRouter } from "next/router";
import clsx from "clsx";
import { fontSairaCondensed } from "@/config/fonts";

export const Navbar = () => {
  const route = useRouter();

  return (
    <NextUINavbar
      maxWidth="full"
      position="sticky"
      className="bg-transparent w-full"
    >
      <div className="w-full flex justify-center items-center">
        <div className="container flex justify-between items-center">
          <NavbarContent>
            <NavbarBrand className="gap-3 max-w-fit">
              <NextLink
                className="flex justify-start items-center gap-1"
                href="/"
              >
                <div className="h-16 py-4">
                  <Image
                    className="h-full w-full"
                    alt="app-logo"
                    src={"/images/logo.png"}
                    width={180}
                    height={73.19}
                  />
                </div>
              </NextLink>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="basis-1 pl-4 z-50 h-[64px]" justify="end">
            <NavbarMenuToggle className="text-white" />
          </NavbarContent>
        </div>
      </div>

      <NavbarMenu className="bg-transparent flex items-center justify-center">
        <div className="container">
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <NextLink href={item.href}>
                  <Link
                    size="lg"
                    className={clsx(
                      fontSairaCondensed.className,
                      `font-black text-4xl lg:text-6xl mb-8 ${item.href === route.asPath ? "text-[#524FFF]" : "text-white"}`,
                    )}
                  >
                    {item.label}
                  </Link>
                </NextLink>
              </NavbarMenuItem>
            ))}
          </div>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
