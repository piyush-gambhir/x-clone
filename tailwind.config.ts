import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        "twitter-blue": "#1DA1F2",
        "twitter-black": "#14171A",
        "twitter-dark-gray": "#657786",
        "twitter-light-gray": "#AAB8C2",
        "twitter-extra-light-gray": "#E1E8ED",
        "twitter-extra-extra-light-gray": "#F5F8FA",
        "twitter-like-pink": "#f91880",
        "twitter-repost-green": "#00ba7c",
        "twitter-error-red": "#f4212e",
      },
    },
  },
  plugins: [],
};
export default config;
