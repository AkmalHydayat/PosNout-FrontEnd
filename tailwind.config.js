/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-bg-img": "url('./assets/bg.jpg')",
      },
      colors: {
        colorOne: "#dddddd",
        colorTwo: "#f5f5f5",
        primary: "#eae2b7",
        secondary: "#003049",
        thrd: "#437cff",
        fnd: "#d62828",
        vnd: "#2a9d8f",
        snd: "#f48c06",
        glass: "rgb(245, 247, 251, 0.5)",
        gr1: "#ff1b6b",
        gr2: "#45caff",
      },
      fontFamily: {
        titilium: ["Titillium Web", "sans-serif"],
        acme: ["Acme", "sans-serif"],
        mouse: ["Mouse Memoirs", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        cus: " 0 0 10px 2px",
        sm2: " 0 0 5px 1px",
        glasses: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { border: "2px solid #f77f00" },
          "33%": { border: "2px solid #d62828" },
          "66%": { border: "2px solid #003049" },
        },
        rotates: {
          "0%": {
            transform: "rotate(0)",
          },

          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        blink: "blink 8s ease-in-out infinite",
        rotates: "rotates 4s linear infinite",
      },
    },
  },
  plugins: [],
};
