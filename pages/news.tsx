import { fullScreen, subtitle } from "@/components/primitives";
import {
  ContactNowSection,
  ListNewsSection,
  SubcribeSection,
  renderTitle,
} from "@/components/sections";
import { textConfig } from "@/config/text";
import DefaultLayout from "@/layouts/default";
import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { getText } from "@/firebase/modules/text";

export async function getStaticProps() {
  try {
    const text = await getText("/");
    return { props: { text } };
  } catch {
    return { notFound: true };
  }
}

export default function IndexPage() {
  const router = useRouter();

  return (
    <DefaultLayout>
      <Head>
        <title>{`${textConfig.news.section1.title} | Looneyesstudio`}</title>
        <meta
          key="title"
          content={`Liên hệ | Looneyesstudio`}
          property="og:title"
        />
      </Head>
      <div className="bg-black">
        {/**
         * SECTION 1
         */}
        <section className="flex lg:h-screen bg-sky_1 bg-contain relative px-4">
          <div className={fullScreen()}>
            <div className="sm:w-full md:w-3/5 opacity-50">
              <Image
                className="h-full w-full object-cover"
                alt="intro-cover-1"
                src={"/images/earth.png"}
                width={1162}
                height={993}
              />
            </div>
          </div>

          <div
            className={clsx(
              fullScreen({
                type: "relative",
              }),
              "flex justify-center items-center",
            )}
          >
            <div className="container h-full flex flex-col justify-center">
              <div className="h-[240px]" />
              {renderTitle(textConfig.news.section1.title, "white")}
              <h3
                className={subtitle({
                  color: "white",
                  size: "lg",
                })}
              >
                {textConfig.news.section1.description}
              </h3>
            </div>
          </div>
        </section>

        {/**
         * SECTION 2
         */}

        <ListNewsSection onClick={(id) => router.push(`/news/${id}`)} />

        {/**
         * SECTION 3
         */}

        <ContactNowSection />

        {/**
         * SECTION 4
         */}

        <SubcribeSection />
      </div>
    </DefaultLayout>
  );
}
