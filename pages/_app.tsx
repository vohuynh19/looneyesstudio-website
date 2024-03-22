import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { fontSans, fontMono } from "@/config/fonts";
import { useRouter } from "next/router";
import "@/styles/globals.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthUserProvider } from "@/firebase/context";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/config/client";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthUserProvider>
        <NextUIProvider navigate={router.push}>
          <NextThemesProvider>
            <Component {...pageProps} />
            <ToastContainer />
          </NextThemesProvider>
        </NextUIProvider>
      </AuthUserProvider>
    </QueryClientProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
