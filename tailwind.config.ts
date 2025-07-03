import { Outfit, Ovo } from "next/font/google";
import type { Config } from "tailwindcss";
import Image from "next/image";
import React from "react";


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff", // Light gray for hover effects
        darkHover: "#2a004a", // Dark gray for hover effects
        darkTheme: '#11001F', // Dark gray for dark theme
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        'black': '4px 4px 4px 0 #000',
        'white': '4px 4px 4px 0 #fff',
    },
    
    gridTemplateColumns: {
      'auto': 'repeat(auto-fit, minmax(200px, 1fr))', // Responsive grid columns
    },
  },
  },
  darkMode: 'selector',
  plugins: [],
};
