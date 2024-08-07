import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primaryColor": "#ffc045",
        "primaryDarkColor": "#cf5123",
        "secondaryColor": "#065471",
        "secondaryDarkColor": "#000e40",
        "borderColor": "#e2e8f0",
        "lightGray": "#9CA3AF",
        "secondaryText":"#6b7280"
      },  
    },
  },
  plugins: [],
};
export default config;
