import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Saira_Condensed,
  Saira,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontSairaCondensed = Saira_Condensed({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "vietnamese"],
});

export const fontSaira = Saira({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "vietnamese"],
});
