import theme from "./theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1176px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        alDark: theme.colors.al.bgDark,
        alBorder: theme.colors.al.bgLight,
        alLight: theme.colors.al.extralight,
        bnpDark: theme.colors.bnp.bgDark,
        bnpBorder: theme.colors.bnp.bgLight,
        bnpLight: theme.colors.bnp.extralight,
        japaDark: theme.colors.japa.bgDark,
        japaBorder: theme.colors.japa.bgLight,
        japaLight: theme.colors.japa.extralight,
        otherDark: theme.colors.others.bgDark,
        otherBorder: theme.colors.others.bgLight,
        otherLight: theme.colors.others.extralight,
        PurpleDark: theme.colors.primary.dark,
        PurpleLight: theme.colors.primary.light,
        hover: theme.colors.hover.color,
        wwhite: "#ffff",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
          lg: "24px",
        },
      },
      fontFamily: {
        kalbela: ['"kalbela"', "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
