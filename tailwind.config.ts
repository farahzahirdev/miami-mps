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
          blue: "#49B2E9",
          "blue-dark": "#2E9FD4",
          navy: "#232B75",
          green: "#97C93E",
          "green-dark": "#7AAD32",
          orange: "#D95511",
          "blue-light": "#EBF7FD",
          "blue-soft": "#D4EFFA",
          "navy-dark": "#1A2158",
          slate: "#5A6285",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "mps-body": ["1.0625rem", { lineHeight: "1.75" }],
        "mps-large": ["1.25rem", { lineHeight: "1.65" }],
        "mps-small": ["0.9375rem", { lineHeight: "1.65" }],
        "mps-h1": [
          "clamp(2.25rem, calc((3.5 - 1) * 1.2vw + 1rem), 3.5rem)",
          { lineHeight: "1.12", letterSpacing: "-0.025em" },
        ],
        "mps-h2": [
          "clamp(1.875rem, calc((2.625 - 1) * 1.2vw + 1rem), 2.625rem)",
          { lineHeight: "1.2", letterSpacing: "-0.02em" },
        ],
        "mps-h3": [
          "clamp(1.375rem, calc((1.75 - 1) * 1.2vw + 1rem), 1.75rem)",
          { lineHeight: "1.3", letterSpacing: "-0.01em" },
        ],
        "mps-h4": [
          "clamp(0.8125rem, calc((0.9375 - 1) * 1.2vw + 1rem), 0.9375rem)",
          { lineHeight: "1.4", letterSpacing: "0.08em" },
        ],
      },
      maxWidth: {
        content: "1350px",
      },
      borderRadius: {
        card: "1.25rem",
        image: "2rem",
        float: "2rem",
        pill: "9999px",
      },
      boxShadow: {
        card: "0 4px 24px -6px rgba(35, 43, 117, 0.1)",
        "card-hover": "0 16px 48px -12px rgba(35, 43, 117, 0.16)",
        float: "0 24px 64px -12px rgba(35, 43, 117, 0.22)",
        soft: "0 2px 12px -2px rgba(35, 43, 117, 0.08)",
        image: "0 20px 48px -16px rgba(35, 43, 117, 0.18)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(1rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.55s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
