/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screen: {
      xs: { max: "430px" },
    },
    extend: {
      fontFamily: {
        title: "DM Sans, sans",
      },
      colors: {
        darkBlue: "#0B1F39",
      },
    },
  },
  plugins: [],
};
