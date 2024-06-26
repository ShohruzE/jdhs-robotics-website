import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      secondaryOpaque: 'rgb(var(--color-secondary) / 0.5)',
      tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
      accent: 'rgb(var(--color-accent) / <alpha-value>)',
      accentDark: 'rgb(var(--color-accent-secondary) / <alpha-value>)',
    },
    extend: {
      fontFamily: {
        main: ['var(--font-bahnschrift)'],
        inter: ['var(--font-inter)'],
      },
    }
  },
  plugins: [],
};
export default config;
