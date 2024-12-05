/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.svg",
  ],
  theme: {
    extend: {
      colors: {
        "bermuda-gray": "#6b83a6",
        "brandy-punch": "#ce7829",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  safelist: [
    "block",
    "lg:mb-5",
    "lg:mt-5",
    "mb-10",
    "mt-0",
    "mx-auto",
    "rounded-full",
    "sm:float-right",
    "sm:mb-5",
    "sm:ml-5",
  ],
};
