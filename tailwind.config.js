/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        havenly: {
        
      "primary": "#161C2D",
              
      "secondary": "#A4D83F",
              
      "accent": "#37CDBE",
              
      "neutral": "#3D4451",
              
      "base-100": "#FFFFFF",
              
      "info": "#3ABFF8",
              
      "success": "#79C31D",
              
      "warning": "#FBBD23",
              
      "error": "#F87272",
              },
            },
          ],
        },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
