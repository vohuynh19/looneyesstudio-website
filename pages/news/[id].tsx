import { fullScreen, subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import clsx from "clsx";
import Image from "next/image";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { getNews, getPageNews } from "@/firebase/modules/news";

import { fontSaira } from "@/config/fonts";
import dynamic from "next/dynamic";

export async function getStaticPaths() {
  const news = await getPageNews();
  const paths = news.map((n) => ({
    params: { id: n.id },
  }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  try {
    const data = await getNews(params.id);
    return { props: { data } };
  } catch {
    return { notFound: true };
  }
}

const EditerMarkdown = dynamic(
  () =>
    import("@uiw/react-md-editor").then((mod) => {
      return mod.default.Markdown;
    }),
  { ssr: false },
);

export default function IndexPage({ data }: { data: INews }) {
  return (
    <DefaultLayout>
      <div className="bg-black">
        {/**
         * SECTION 1
         */}
        <section className="flex min-h-screen bg-sky_1 bg-contain relative px-4">
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
            )}
          >
            <div className="container w-full flex flex-col relative py-40">
              <div className="relative p-12">
                <div className="top-0 left-0 right-0 bottom-0 bg-[#ffffff] absolute rounded-3xl opacity-10 z-10" />

                <div className="relative z-20">
                  <h3
                    className={clsx(
                      title({
                        color: "white",
                        size: "lg",
                      }),
                      "uppercase mb-4 font-black",
                    )}
                  >
                    {data.title}
                  </h3>
                  <h3
                    className={clsx(
                      subtitle({
                        color: "white",
                        size: "md1",
                      }),
                    )}
                  >
                    {data.subTitle}
                  </h3>

                  <div data-color-mode="dark">
                    <EditerMarkdown
                      className={clsx(
                        `!${fontSaira.className}`,
                        "!bg-transparent",
                      )}
                      style={{
                        fontFamily: fontSaira.style.fontFamily,
                        fontStyle: fontSaira.style.fontStyle,
                      }}
                      source={data.markdownContent}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
