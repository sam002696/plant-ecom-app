export const theme = {
  // Background colors with opacity
  bgWhite: (opacity) => `rgba(255, 255, 255, ${opacity})`,

  // Indigo shades
  indigo: {
    light: (opacity = 1) => `rgba(102, 126, 234, ${opacity})`, // Light Indigo
    dark: (opacity = 1) => `rgba(49, 46, 129, ${opacity})`, // Dark Indigo
    base: (opacity = 1) => `rgba(75, 85, 205, ${opacity})`, // Base Indigo
  },

  // Teal shades
  teal: {
    light: (opacity = 1) => `rgba(129, 230, 217, ${opacity})`, // Light Teal
    dark: (opacity = 1) => `rgba(13, 77, 67, ${opacity})`, // Dark Teal
    base: (opacity = 1) => `rgba(20, 184, 166, ${opacity})`, // Base Teal
  },

  // Cyan shades
  cyan: {
    light: (opacity = 1) => `rgba(103, 249, 255, ${opacity})`, // Light Cyan
    dark: (opacity = 1) => `rgba(2, 132, 199, ${opacity})`, // Dark Cyan
    base: (opacity = 1) => `rgba(6, 182, 212, ${opacity})`, // Base Cyan
  },

  // Additional colors
  yellow: (opacity = 1) => `rgba(252, 211, 77, ${opacity})`, // Yellow
  gray: {
    light: (opacity = 1) => `rgba(243, 244, 246, ${opacity})`, // Light Gray
    dark: (opacity = 1) => `rgba(55, 65, 81, ${opacity})`, // Dark Gray
    base: (opacity = 1) => `rgba(107, 114, 128, ${opacity})`, // Base Gray
  },
};
