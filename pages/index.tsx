import { MouseLogo } from "@/components/icons";
import { fullScreen, subtitle, title } from "@/components/primitives";
import {
  ContactNowSection,
  DroneSection,
  NewsSection,
  ServiceSection,
  SubcribeSection,
  renderTitle,
} from "@/components/sections";
import { textConfig } from "@/config/text";
import DefaultLayout from "@/layouts/default";
import { useSnapScroll } from "@/layouts/useSnapScroll";
import clsx from "clsx";
import Image from "next/image";

export default function IndexPage() {
  useSnapScroll();

  return (
    <DefaultLayout>
      <div className="bg-black">
        {/**
         * SECTION 1
         */}
        <section className="flex lg:h-screen bg-sky_1 bg-contain relative">
          <div className={fullScreen()}>
            <div className="sm:w-full md:w-3/5">
              <Image
                className="h-full w-full object-cover"
                alt="home-cover-1"
                src={"/images/home-1.png"}
                width={1136}
                height={721}
              />
            </div>
          </div>

          <div className={clsx(fullScreen({ type: "relative" }), "py-48")}>
            <div className="text-center flex flex-col items-center justify-center p-4 md:p-0">
              {renderTitle(textConfig["/"].section1.title, "white")}

              <h3
                className={subtitle({
                  color: "white",
                  size: "lg",
                })}
              >
                {textConfig["/"].section1.description}
              </h3>

              <MouseLogo className="mt-8" />
            </div>
          </div>
        </section>

        {/**
         * SECTION 2
         */}

        <section className="px-4 pb-16 lg:h-screen bg-sky_1 bg-contain relative">
          <div
            className={fullScreen({
              type: "absolute",
            })}
          >
            <div className="w-full max-w-[1536px]">
              <Image
                className="h-full w-full object-cover"
                alt="home-cover-2"
                src={"/images/home-2.png"}
                width={888}
                height={779}
              />
            </div>
          </div>

          <div
            className={clsx(
              fullScreen({
                type: "relative",
              }),
              "py-8",
            )}
          >
            <div className="container flex items-center justify-center">
              <div className="w-full flex flex-col ">
                <h3
                  className={clsx(
                    title({
                      size: "md",
                      color: "purple",
                    }),
                    "uppercase mb-4 font-medium",
                  )}
                >
                  {textConfig["/"].section2.title1}
                </h3>

                <h3
                  className={clsx(
                    title({
                      size: "lg",
                      color: "white",
                    }),
                    "uppercase mb-4 font-medium",
                  )}
                >
                  {textConfig["/"].section2.title2}
                </h3>

                <div className="h-[3px] w-[240px] bg-[#524FFF] my-3" />

                <h3
                  className={subtitle({
                    size: "md1",
                    color: "white",
                  })}
                >
                  {textConfig["/"].section2.description1}
                </h3>

                <h3
                  className={subtitle({
                    size: "md1",
                    color: "white",
                  })}
                >
                  {textConfig["/"].section2.description2}
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/**
         * SECTION 3
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
                {renderTitle(textConfig["/"].section3.title)}
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
                  {textConfig["/"].section3.description1}
                </p>
                <p
                  className={subtitle({
                    size: "lg",
                    color: "white",
                  })}
                >
                  {textConfig["/"].section3.description2}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/**
         * SECTION 4
         */}

        <NewsSection />

        {/**
         * SECTION 5
         */}

        <ServiceSection />

        {/**
         * SECTION 6
         */}

        <DroneSection />

        {/**
         * SECTION 7
         */}

        <ContactNowSection />

        {/**
         * SECTION 8
         */}

        <SubcribeSection />
      </div>
    </DefaultLayout>
  );
}
