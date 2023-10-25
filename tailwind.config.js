/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        custom: "600px",
      },
      borderColor: {
        headerOutline: "hsl(217, 16%, 45%)",
      },
      colors: {
        dark: "hsl(229, 25%, 31%)",
        score: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
      backgroundColor: {
        bars: "hsl(237, 49%, 15%)",
      },
      backgroundImage: {
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
    },
  },
  plugins: [],
};
