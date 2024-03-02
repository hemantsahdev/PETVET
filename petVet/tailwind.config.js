/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueText: "#03041c",
        secondaryBg: "#605857",
        customBackground: "#f0f0f0",
        btnBlueColor: "#0e0f35",
      },
    },
  },
  plugins: [],
};

