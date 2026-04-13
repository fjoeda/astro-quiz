/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface": "#11131d",
        "surface-container-highest": "#32343f",
        "on-primary-fixed-variant": "#5b00c5",
        "on-tertiary-fixed-variant": "#3323cc",
        "surface-container-low": "#191b26",
        "surface-container": "#1d1f2a",
        "outline-variant": "#4a4455",
        "secondary": "#fff9ef",
        "on-primary-fixed": "#250059",
        "inverse-on-surface": "#2e303b",
        "surface-container-high": "#282934",
        "surface-container-lowest": "#0c0e18",
        "on-tertiary": "#1d00a5",
        "on-secondary": "#3a3000",
        "on-secondary-fixed": "#221b00",
        "on-primary": "#3f008d",
        "inverse-primary": "#7331df",
        "secondary-fixed": "#ffe16d",
        "surface-tint": "#d3bbff",
        "primary-container": "#6d28d9",
        "surface-variant": "#32343f",
        "tertiary-container": "#473cdd",
        "tertiary": "#c3c0ff",
        "on-error": "#690005",
        "surface-bright": "#373844",
        "inverse-surface": "#e1e1f0",
        "primary-fixed": "#ebddff",
        "on-tertiary-container": "#cccaff",
        "on-primary-container": "#dac5ff",
        "on-error-container": "#ffdad6",
        "on-secondary-fixed-variant": "#544600",
        "background": "#11131d",
        "on-surface-variant": "#ccc3d7",
        "tertiary-fixed": "#e2dfff",
        "primary": "#d3bbff",
        "on-tertiary-fixed": "#0f0069",
        "outline": "#958da1",
        "surface-dim": "#11131d",
        "secondary-fixed-dim": "#e9c400",
        "on-secondary-container": "#725f00",
        "error": "#ffb4ab",
        "error-container": "#93000a",
        "on-surface": "#e1e1f0",
        "tertiary-fixed-dim": "#c3c0ff",
        "secondary-container": "#ffdb3c",
        "on-background": "#e1e1f0",
        "primary-fixed-dim": "#d3bbff"
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Plus Jakarta Sans"],
        "body": ["Plus Jakarta Sans"],
        "label": ["Plus Jakarta Sans"]
      }
    },
  },
  plugins: [],
}

