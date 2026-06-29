import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/globals.css",
  ],
  theme: {
    extend: {
      colors: {
        mps: {
          blue: "#014BB6",
          navy: "#061281",
          cyan: "#8AF6FF",
          accent: "#4CF957",
          "accent-dark": "#173619",
          orange: "#D95511",
          "blue-light": "#E8F4FD",
          "accent-light": "#EAF6EA",
          "navy-dark": "#041050",
        },
      },
      fontFamily: {
        heading: ['Georgia', '"Times New Roman"', "serif"],
        body: ['"Times New Roman"', "Times", "serif"],
      },
      fontSize: {
        "mps-body": ["1.2rem", { lineHeight: "1.8" }],
        "mps-large": ["1.5rem", { lineHeight: "1.8" }],
        "mps-small": ["1rem", { lineHeight: "1.8" }],
        "mps-h1": ["clamp(2rem, calc((4.2 - 1) * 1.2vw + 1rem), 4.2rem)", { lineHeight: "1.22", letterSpacing: "0.02em" }],
        "mps-h2": ["clamp(1.75rem, calc((2.8 - 1) * 1.2vw + 1rem), 2.8rem)", { lineHeight: "1.25", letterSpacing: "0.02em" }],
        "mps-h3": ["clamp(1.5rem, calc((2.2 - 1) * 1.2vw + 1rem), 2.2rem)", { lineHeight: "1.28", letterSpacing: "0.02em" }],
        "mps-h4": ["clamp(1rem, calc((1.2 - 1) * 1.2vw + 1rem), 1.2rem)", { lineHeight: "1.33", letterSpacing: "0.02em" }],
      },
      letterSpacing: {
        heading: "0.02em",
        button: "0.04em",
      },
      maxWidth: {
        content: "1350px",
      },
      borderRadius: {
        petal: "16px 0",
      },
    },
  },
  plugins: [],
};

export default config;
