module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Use 'class' for manual toggling or 'media' for OS preference
  theme: {
    extend: {
      colors: {
        primary: "#007ACC", // Soft Blue
        secondary: "#FF5722", // Soft Orange
        background: "#FFFFFF", // White
        darkBackground: "#1E293B", // Dark
        textPrimary: "#333333", // Dark Gray
        textSecondary: "#666666", // Medium Gray
        muted: "#E0E0E0", // Light Gray
        textDark: "#E2E8F0", // Text for Dark Mode
      },
    },
  },
  plugins: [
    // Add your plugins here if needed
    // Example: require("@tailwindcss/forms"), require("@tailwindcss/typography")
  ],
};
