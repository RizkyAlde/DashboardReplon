/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    flowbite.content(),
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          light: '#AED260',  // light green
          DEFAULT: '#228B22',  // forest green
          dark: '#336600',  // dark green
        },
        yellow: {
          light: '#FFFFE0',  // light yellow
          DEFAULT: '#FFB800',  // yellow
          dark: '#FFD700',  // gold
        },
        orange: {
          light: '#FFA07A',  // light salmon
          DEFAULT: '#FF8C00',  // dark orange
          dark: '#FF4500',  // orange red
        },
        red: {
          light: '#FF6347',  // tomato
          DEFAULT: '#FF0000',  // red
          dark: '#8B0000',  // dark red
        },
        blue: {
          light: '#ADD8E6',  // light blue
          DEFAULT: '#0000FF',  // blue
          dark: '#00008B',  // dark blue
        },
        gray: {
          light: '#D3D3D3',  // light gray
          DEFAULT: '#A9A9A9',  // dark gray
          dark: '#696969',  // dim gray
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
