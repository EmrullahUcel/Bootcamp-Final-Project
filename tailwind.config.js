/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "650px" },
      md: "450px",
      lg: "1024px",
    },
    extend: {},
  },
  plugins: [],
};
