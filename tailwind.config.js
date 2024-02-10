/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        movebike: "bike 20s linear  infinite",
        headerbike2: "bike2 20s linear  infinite",
        fotterbike: "footerbike 20s linear  infinite",
        mybounce: "bounce2 1s linear  infinite alternate",
        airopalneheadre: "airopalnemove 5s linear  infinite alternate",
      },
      keyframes: {
        bike: {
          "0%": { transform: "translateX(0) rotate3d(1, 1, 1, 0deg)" },
          "100%": { transform: "translateX(-100vw) rotate3d(1, 1, 1, 45deg)" },
        },
        bikefooter: {
          "0%": { transform: "translateX(0) " },
          "100%": { transform: "translateX(-100vw) " },
        },
        bike2: {
          "0%": { transform: "translateX(0)  " },
          "100%": { transform: "translateX(328px) " },
        },
        bounce2: {
          "0%": { transform: "translateY(0)  " },
          "100%": { transform: "translateY(-3%) " },
        },
        airopalnemove: {
          "0%": { transform: "rotateX(0)  " },
          "100%": { transform: "rotateX(40deg) " },
        },
      },
      fontFamily: {
        lucky: "Lucky Dino",
        chewy: "Chewy",
        bal: "Balsamiq Sans",
      },
    },
  },
  plugins: [],
};
