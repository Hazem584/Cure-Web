import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "auth-bg": "url('/Group 1.svg')",
      },
      fontFamily: {
        georgia: ["Georgia", "serif"],
      },
     
      colors: {
        primary: "#145DB8",
        lighttertiary: "#F5F6F7",
        primarylighter: "#6292CF",
        secondry: "#05162C",
        neutral: "#6D7379",
        dark: {
          darkBg: "#0D1117",
          bgSurface: "#161B22",
          borderDark: "#30363D",

          textPrimary: "#E6EDF3",
          textSecondary: "#8B949E",
          textOnDark: "#F0F6FC",
        },
      },
    },
  },
  plugins: [],
});
