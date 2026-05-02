/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        black: "#1e1e1e",
        white: "#e7e7d8",
        eagle: "#afac95",
        primary: "#d5ff40",
        error: "#ff8b00",
      },
    },
  },
  plugins: [],
};
