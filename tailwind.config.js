module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "576px",

      md: "768px",

      lg: "992px",

      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        body: ["Nunito", "sans-serif"],
        head: ["Irish Grover", "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
