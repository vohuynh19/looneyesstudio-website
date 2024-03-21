import { useEffect } from "react";

export const useSnapScroll = () => {
  useEffect(() => {
    const scrollSnap = `
        <style id="snapScrollStyle">
          @media screen and (min-width: 1024px){
            html {
              scroll-behavior: smooth;
              scroll-snap-type: y mandatory;
            }
            section{
              scroll-snap-align: start;
            }
          }
        </style>
      `;
    document.head.insertAdjacentHTML("beforeend", scrollSnap);

    return () => {
      const styleElement = document.getElementById("snapScrollStyle");

      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);
};
