import { fullScreen, subtitle } from "@/components/primitives";
import {
  ContactNowSection,
  ServiceSection,
  SubcribeSection,
  renderTitle,
} from "@/components/sections";
import { textConfig } from "@/config/text";
import DefaultLayout from "@/layouts/default";
import { useSnapScroll } from "@/layouts/useSnapScroll";
import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";

export default function IndexPage() {
  useSnapScroll();

  return (
    <DefaultLayout>
      <Head>
        <title>{`${textConfig.intro.section1.title} | Looneyesstudio`}</title>
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
            <div className="sm:w-full md:w-3/5">
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
              {renderTitle(textConfig.intro.section1.title, "white")}
              <h3
                className={subtitle({
                  color: "white",
                  size: "lg",
                })}
              >
                {textConfig.intro.section1.description}
              </h3>
            </div>
          </div>
        </section>

        {/**
         * SECTION 2
         */}

        <section className="flex h-[600px] lg:h-screen bg-sky_1 bg-contain relative px-4">
          <div className={clsx(fullScreen(), "overflow-hidden")}>
            <div className="absolute h-1/2 right-[-64px]">
              <Image
                className="h-full w-full object-cover"
                alt="home-cover-1"
                src={"/images/home-1.png"}
                width={1136}
                height={721}
              />
            </div>
          </div>

          <div className={fullScreen({ type: "relative" })}>
            <div className="container">
              <div className="w-full break-normal">
                {renderTitle(textConfig.intro.section2.title, "white")}
              </div>

              <div className="w-full lg:w-[800px] break-normal mt-8">
                <p
                  className={clsx(
                    subtitle({
                      size: "lg",
                      color: "white",
                    }),
                    "mb-6",
                  )}
                >
                  {textConfig.intro.section2.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/**
         * SECTION 3
         */}

        <section className="flex h-[600px] lg:h-screen bg-sky_1 bg-contain relative px-4">
          <div className={fullScreen()}>
            <div className="sm:w-full md:w-3/5 absolute left-0">
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
            className={fullScreen({
              type: "relative",
            })}
          >
            <div className="container flex items-center justify-end">
              <div className="w-full md:w-[50%]">
                <div className="w-full break-normal">
                  {renderTitle(textConfig.intro.section3.title, "white")}
                </div>
                <div className="w-full break-normal mt-8">
                  <p
                    className={clsx(
                      subtitle({
                        size: "lg",
                        color: "white",
                      }),
                      "mb-6",
                    )}
                  >
                    {textConfig.intro.section3.description1}
                  </p>
                  <p
                    className={clsx(
                      subtitle({
                        size: "lg",
                        color: "white",
                      }),
                      "mb-6",
                    )}
                  >
                    {textConfig.intro.section3.description2}
                  </p>
                  <p
                    className={clsx(
                      subtitle({
                        size: "lg",
                        color: "white",
                      }),
                      "mb-6",
                    )}
                  >
                    {textConfig.intro.section3.description3}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/**
         * SECTION 4
         */}

        <ServiceSection />

        {/**
         * SECTION 5
         */}

        <ContactNowSection />

        {/**
         * SECTION 6
         */}

        <SubcribeSection />
      </div>
    </DefaultLayout>
  );
}
