// lib/font.ts
import { createFont } from 'next/font/local';

const customFont = createFont({
  name: 'CustomFont', // Give a name to your font
  files: [
    '/fonts/custom-font.woff2', // Path to the woff2 file
    '/fonts/custom-font.woff', // Path to the woff file
  ],
  display: 'swap', // Use 'swap', 'block', 'fallback', or 'optional'
});

export const customFontClass = customFont.style;
