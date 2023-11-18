/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "login-bg-img": "url('./assets/bg.jpg')",
      },
      colors: {
        colorOne: "#f7f7f7",
        colorDarkOne: "#121212",
        colorDarkTwo: "#1e1e1e",
        colorTwo: "#fff",
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
        play: ["Play", "sans-serif"],
        acme: ["Acme", "sans-serif"],
        mouse: ["Mouse Memoirs", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        DMSans: ["DM Sans", "sans-serif"],
        Nunito_Sans: ["Nunito Sans", "sans-serif"],
        pt_Sans: ["PT Sans", "sans-serif"],
      },
      boxShadow: {
        cus: " 0 0 10px 2px",
        cus2: " 0px 0px 4px 0px",
        sm2: " 0 0 5px 1px",
        glasses: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        zoomInv: {
          "0%,100%": {
            transform: "scale(1.3) rotate(6deg)",
            color: "black",
          },
          "50%": { transform: "scale(1.6) rotate(6deg)", color: "white" },
          "33%,66%": { color: "#c026d3" },
        },
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
        flip: {
          "0%": {
            transform: "rotate(0)",
          },

          "100%": {
            transform: "rotateY(180deg)",
          },
        },
        flipBack: {
          "0%": {
            transform: "rotateY(180deg)",
          },

          "100%": {
            transform: "rotate(0deg)",
          },
        },
        slideDown: {
          "0%": {
            transform: "translateY(-100%)",
          },

          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        blink: "blink 8s ease-in-out infinite",
        zoomInv: "zoomInv 4s ease-in infinite",
        rotates: "rotates 4s linear infinite",
        rotatesIn: "rotates 4s ease-in-out",
        slideDown: "slideDown 0.5s ease-in-out",
        flip: "flip 0.5s ease-in-out",
        flipBack: "flipBack 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
