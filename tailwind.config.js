/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        havenly: {
        
      "primary": "#1E3F5D",
              
      "secondary": "#DB8C23",
              
      "accent": "#37CDBE",
              
      "neutral": "#3D4451",
              
      "base-100": "#FFFFFF",
              
      "info": "#3ABFF8",
              
      "success": "#36D399",
              
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
