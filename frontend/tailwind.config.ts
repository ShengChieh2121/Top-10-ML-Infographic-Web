import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#102033",
        navy: "#13294b",
        tech: "#1f78ff",
        aqua: "#1bb7a6",
        violet: "#7c3aed",
        mist: "#f4f7fb",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(16, 32, 51, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
