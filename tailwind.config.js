/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primaryFont: "Inter",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        bgDarkColor: "#1E1E1E",
        bgLightColor: "hsl(36, 100%, 99%)",
        DarkgrayishBlue: "hsl(236, 13%, 42%)",
      },
    },
  },
  plugins: [],
};
