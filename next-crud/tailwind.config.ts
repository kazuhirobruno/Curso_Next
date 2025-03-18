import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ".app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {pattern: /from-(green|blue|gray)-(400|500|700)/,},
    {pattern: /to-(green|blue|gray)-(400|500|700)/,},
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
