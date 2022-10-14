/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      transparent: "transparent",

      white: "#fff",
      black: "#000",

      gray: {
        900: "#212121",
        800: "#4A4A4A",
        500: "#B3B3B3",
        300: "#E1E1E6",
      },

      cyan: {
        500: "#81D8F7",
        400: "#61DAFB",
      },
    },

    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
