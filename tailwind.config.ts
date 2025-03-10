import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        selection: {
          background: "var(--selection-background)",
          foreground: "var(--selection-foreground)",
        },
        background: {
          hovering: "var(--background-hovering)",
          surface: "var(--background-surface)",
          DEFAULT: "var(--background)",
        },
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
