// src/utils/loadImages.js
export const loadImage = (index) => {
    try {
      const imagePath = require(`../assets/Portfolio/image${index}.webp`).default;
      console.log(`Loaded image: ${imagePath}`); // Debugging
      return imagePath;
    } catch (error) {
      console.error(`Image not found: ../assets/Portfolio/image${index}.webp`);
      return null;
    }
  };
  