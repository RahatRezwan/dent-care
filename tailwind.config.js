/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {},
   },
   daisyui: {
      themes: [
         {
            Light: {
               primary: "#3a4256",

               secondary: "#19d3ae",

               accent: "#0fcfec",

               neutral: "#5D5656",

               "base-100": "#ffffff",

               info: "#3ABFF8",

               success: "#36D399",

               warning: "#FBBD23",

               error: "#F87272",
            },
         },
         "night",
      ],
   },
   plugins: [require("daisyui")],
};
