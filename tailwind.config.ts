import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/restaurant-lp-components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cream: {
          primary: "#E9D175",
        },
        blue: {
          dark: "#110D3C",
        },
        orange: {
          primary: "#F26633",
        },
        gray: {
          primary: "#797979",
          secondary: "#F5F5F5",
          tertiary: "#787878",
        },
        primary: "#110D3C",
        secondary: "#F26633",
        secondary2: "#424E61",
        light: "#6A6A6A",
        skyBlue: "#7DD2EE",
        sapphireBlue: "#1E6a98",
        "accents-glaucous": "#6F82AF",
        "accents-mustard": "#F2B203",
        "accents-glaucous-3": "#C74129",
        "main-border": "#E3E5E8",
        "background-black1": "#101010",
        color4: "#0D54EB",
        tertiary: "#FF824F",
      },
    },
  },
  plugins: [],
};
export default config;
