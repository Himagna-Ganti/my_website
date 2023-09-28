/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        darkness: "#0f172a",
        buttons: "#be123c",
        textt: "#71717a",
        code: "#43d9ad",
        card: "#16213D",
      },
      boxShadow: {
        custom:
          "0 10px 20px rgba(225, 29, 72, 0.5) 0 6px 6px rgba(225, 29, 72, 0.5), 0 0 100px -10px rgba(225, 29, 72, 0.5) ",
      },
    },

    fontFamily: {
      fira: "Fira Code",
      monaco: "Monaco",
    },
  },
  plugins: [],
};
