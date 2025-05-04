/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: "var(--font-poppins), var(--font-lato), sans-serif",
        heading: "var(--font-montserrat), var(--font-playfair), serif",
      },
    },
  },
  plugins: [],
};
