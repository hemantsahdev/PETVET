
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    " ./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        // my template colors
          primaryBlue:"#425ea9",
          backgroundWhite:"#ededed",
          creamContrast:"#eee5e0",
          magentaHighlight:"#9d3c9d",
          // ==========================

          // yeh vaise hi hai
        primaryColor: "#000",
        yellowColor: "#FEB60D",
        purpleColor: "#9771FF",
        irisBlueColor: "#01B5C5",
        headingColor: "#181A1E",
        textColor: "#4E545F",
      },
      boxShadow: {
        panelShadow: "rgba(17,12,46,0.15)0px 48px 100px 0px;",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.zoom-in': {
          transition: 'transform 0.3s ease',
        },
        '.zoom-in:hover': {
          transform: 'scale(1.1)',
        },
      };

      addUtilities(newUtilities, ['hover']);
    },
  ],
});

