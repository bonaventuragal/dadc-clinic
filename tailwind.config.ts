import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "cocogoose-pro": "var(--font-cocogoose-pro)",
      },
      fontWeight: {
        semilight: "350",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "ash-white": "#DFD9C3",
        "ash-green": "#668F6F",
        "bold-green": "#2D733E",
      },
    },
  },
  plugins: [],
};
export default config;
