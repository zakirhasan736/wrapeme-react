/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-100": "#060f14",
        "white-50": "rgba(255, 255, 255, 0.5)",
        "white-100": "#fff",
        "primary-10": "rgba(41, 101, 138, 0.1)",
        "neutral-30": "rgba(6, 15, 20, 0.3)",
        "primary-100": "#29658a",
        "white-70": "rgba(255, 255, 255, 0.7)",
        "neutral-5": "rgba(6, 15, 20, 0.05)",
        "secondary-10": "rgba(76, 149, 108, 0.1)",
        "primary-80": "rgba(41, 101, 138, 0.8)",
        "white-10": "rgba(255, 255, 255, 0.1)",
        gray: "rgba(255, 255, 255, 0.12)",
      },
      spacing: {},
      fontFamily: {
        "text-xs-regular": "Barlow",
        graphik: "Graphik",
      },
    },
    fontSize: {
      "3xs": "10px",
      sm: "14px",
      xs: "12px",
      "5xl": "24px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
