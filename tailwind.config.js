/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./index.html"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Maven Pro", "sans-serif"],
    },
    extend: {
      fontSize: {
        subtitle: "1.75rem",
        title: "2rem",
      },
      colors: {
        yellow: "#ffc200",
        darkGray: "#474559",
        textGray: "#5b5b5b;",
        titleBlack: "#353535",
        headerBlack: "#212121;",
        placeHolder: "#495057",
        lightGray: "#eee",
        linksGray: "rgba(0,0,0,.5)",
        inputBorder: "#ced4da",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        xl: "1124",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
