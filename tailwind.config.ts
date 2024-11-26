import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './src/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      xsm: "430px",
      sm: "640px",
      md: "768px",
      xlg: "860px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
    },
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        overpass: ["Overpass", "sans-serif"],
      },
      colors: {
        primary: "#120A44",
        default: "#F9FAFB",
        footer: "#072134",
        icon: "#154060",
        "pink-badge": "#F64459",
        Clr8584: "#858484",
        ClrEF67: "#EF6712",
        Clr611F: "#611F69",
        Clr5204: "#520477",
        Clr4002: "#40024A",
        ClrA5A1: "#A5A1A7",
        ClrEAE9: "#EAE9F7",
        ClrDFDD: "#DFDDFF",
        Clr5959: "#595959",
        Clr4a23: "#4A235C",
        Clr3C3A: "#3C3A3A",
        ClrFF00: "#FF0000",
      },

      boxShadow: {
        headerShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
        bottomButtonBoxShadow: "0px -3px 4px 0px rgba(0, 0, 0, 0.25)",
        bannerItemBoxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        searchInputBoxShadow:
          "-7px -7px 20px 0px rgba(255, 255, 255, 0.90) inset, 7px 7px 20px 0px rgba(135, 98, 98, 0.40) inset",
        cardShadow: "0px 4.632px 4.632px 0px rgba(0, 0, 0, 0.25)",
        cardOrderShadow: "0px -2.352px 4.703px 0px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        bottomButtonBorderRadius: "10px 10px 0px 0px",
        detaiImageBorderRadius: "0px 0px 20px 20px",
        calculateOrderTopRadius: "20px 20px 0px 0px",
      },

      gridTemplateColumns: {
        gridColumnsCardBox: "repeat(auto-fit, minmax(160px, 1fr))",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#120A44",
              foreground: "#FFFF",
            },
            danger: {
              DEFAULT: "#dc2626",
              foreground: "#FFFF",
            },
            default: {
              DEFAULT: "#F9FAFB",
              foreground: "#000",
            },
          },
        },
      },
    }),
  ],
  corePlugins: {
    container: false,
  },
};
