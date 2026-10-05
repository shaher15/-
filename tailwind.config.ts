import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tajawal: ["var(--font-tajawal)", "Tajawal", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        wassel: {
          dark: "#0B4A3B",
          green: "#0F6E4F",
          mint: "#DFF5EA",
          "mint-2": "#EEF9F2",
          gold: "#B08A2E",
          gray: "#6B7280",
          "gray-light": "#F4F5F7",
        },
        primary: {
          DEFAULT: "#0F6E4F",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#DFF5EA",
          foreground: "#0B4A3B",
        },
        muted: {
          DEFAULT: "#F4F5F7",
          foreground: "#6B7280",
        },
        accent: {
          DEFAULT: "#EEF9F2",
          foreground: "#0B4A3B",
        },
        destructive: {
          DEFAULT: "#C0392B",
          foreground: "#FFFFFF",
        },
        warning: {
          DEFAULT: "#B7791F",
          foreground: "#FFFFFF",
        },
        success: {
          DEFAULT: "#0F6E4F",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1F2937",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
