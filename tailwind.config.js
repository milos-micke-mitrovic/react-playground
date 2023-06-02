/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,tsx,jsx}"];
export const theme = {
  extend: {
    colors: {
      dark: "#272727",
      light: "#fce6b8",
      green: "#14A76C",
      orange: "#f27e11",
      "light-green": "#5aedb2",
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }
      md: "960px",
      // => @media (min-width: 960px) { ... }
      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
};
export const plugins = [require('tailwind-scrollbar'),];
export const darkMode = "class";
