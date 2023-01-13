/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        havenly: {
          primary: "#006F91",

          secondary: "#00ABE0",

          accent: "#37CDBE",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  theme: {
    colors: {
      "color-primary": "#ecfccb",
      lime: "#bef264",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
