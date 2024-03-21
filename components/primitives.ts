import { fontSaira, fontSairaCondensed } from "@/config/fonts";
import clsx from "clsx";
import { tv } from "tailwind-variants";

export const title = tv({
  base: clsx("tracking-tight", fontSairaCondensed.className),
  variants: {
    color: {
      purple: "text-[#524FFF]",
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
      white: "text-white",
      purple2: "from-[#524FFF] to-[#524FFF99]",
    },
    size: {
      base: "text-base",
      sm1: "text-2xl leading-7",
      sm: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
      lgXX: "font-black text-[60px] leading-[70px] xl:text-[100px] xl:leading-[110px] 2xl:text-[8vw] 2xl:leading-[8vw]",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "purple2",
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: clsx("my-2", fontSaira.className),
  variants: {
    size: {
      base: "text-base",
      md1: " text-base lg:text-xl font-regular",
      md2: "text-[24px] font-regular",
      lg: "text-[16px] leading-[20px] lg:text-[24px] lg:leading-[32px] xl:text-[32px] xl:leading-[42px] font-regular",
    },
    color: {
      white: "text-white",
      purple: "text-[#524FFF]",
      grey: "text-[#959595]",
    },
  },
  defaultVariants: {
    color: "white",
  },
});

export const tag = tv({
  base: clsx("text-[#524FFF] text-base font-semibold", fontSaira.className),
  variants: {},
  defaultVariants: {},
});

export const fullScreen = tv({
  base: clsx("flex justify-center items-center"),
  variants: {
    type: {
      absolute: "absolute bottom-0 top-0 left-0 right-0",
      relative: "relative h-full w-full",
    },
  },
  defaultVariants: {
    type: "absolute",
  },
});
