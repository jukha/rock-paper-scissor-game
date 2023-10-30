/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        triangleImg: "url('/assets/bg-triangle.svg')",
        scissorsGradient:
          "linear-gradient(45deg, hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
        paperGradient:
          "linear-gradient(45deg, hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
        rockGradient:
          "linear-gradient(45deg, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
        lizardGradient:
          "linear-gradient(45deg, hsl(261, 73%, 60%), hsl(261, 72%, 63%))",
        cyanGradient:
          "linear-gradient(45deg, hsl(189, 59%, 53%), hsl(189, 58%, 57%))",
        radialGradient:
          "radial-gradient(circle, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
      },
      backgroundColor: {
        bars: "hsl(237, 49%, 15%)",
        noSelection: "hsl(237, 49%, 15%)",
      },
      borderColor: {
        headerOutline: "hsl(217, 16%, 45%)",
      },
      keyframes: {
        "custom-pulse": {
          "0%": {
            "box-shadow":
              "0 0 0 0.5rem hsla(0,0%,100%,.2), 0 0 0 1rem hsla(0,0%,100%,.2), 0 0 0 2rem hsla(0,0%,100%,.2)",
          },
          "100%": {
            "box-shadow":
              "0 0 0 1rem hsla(0,0%,100%,.2), 0 0 0 2rem hsla(0,0%,100%,.2), 0 0 0 4rem hsla(0,0%,100%,0)",
          },
        },
      },
      animation: {
        pulse: "custom-pulse linear 2s infinite alternate",
      },
      colors: {
        dark: "hsl(229, 25%, 31%)",
        score: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
      
    },
  },
  plugins: [],
};
