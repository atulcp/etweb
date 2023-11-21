/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'etsfont1': ['etsfont1'], 
        'etsfont2': ['etsfont2'], 
        'etsfont3': ['etsfont3'], 
        'oswald': ['oswald']
        // Use the name assigned in @font-face
      },
    },
  },
  plugins: [],
}

