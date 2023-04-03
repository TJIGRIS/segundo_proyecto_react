/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundColor: {
        colorPrimario: "#202136",
        colorSecundario: "#27273f",
      },
      textColor: {
        colorPrimario: "#fff",
        colorSecundario: "#ff6d21",
      },
      borderColor: {
        colorPrimario: "#8d4760"
      }
      
    },
  },
  plugins: [],
};

// bg-gradient-to-r from-[#f05908] to-[#c54fc4]
