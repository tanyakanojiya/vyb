/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    backgroundColor: ["responsive", "hover", "focus"],
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      rotate: {
        a: "1deg",
        b: "-2deg",
        c: "2deg",
      },
      backgroundImage: {
        bgImg: "url('/Frame-1574.png')",
        bgImg1: "url('/mountain.png')",
      },
      background: {
        primaryBg: "#00Dc82",
      },
      colors: {
        primary: "#00DC82",
        secondary: "#003C3C",
        bgBody: "#181818",
        Gradient1: "#FF5D5D",
        Gradient2: "#4794FF",
        primaryText: "#000000",
        secondaryText: "838383",
        otherText: "#FFFFFF",
        mgt: "#A300A3",
      },
      fontSize: {
        h1: "40px",
        h2: "32px",
        h3: "27px",
        h4: "22px",
        body1: "18px",
        body2: "16px",
        cta: ["18px", { fontWeight: "600" }],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xl2: "1536",
      },
    },
  },
  plugins: [],
};
