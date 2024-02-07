/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#26BAC9",
        secondary: "#0C9EE8",
        blak: "#1F1F1F",
      },
      fontFamily: {
        body: ["Nunito"],
        myfont: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
