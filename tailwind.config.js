/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        main: "var(--main-background-color)",
        bgYellow: "var(--yellow-background-color)",
        bgLightBlue: "var(--lightBlue-background)",
        greenish: "var(--green)",
      },
      textColor: {
        textWhite: "var(--text-white)",
        textRed: "var(--red)",
        textGreen: "var(--green)",
        darkWhite: "var(--dark-white)",
      },
    },
  },
  plugins: [],
};
