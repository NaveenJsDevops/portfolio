import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    chunkSizeWarningLimit: 1000, // Increase the limit to suppress the warning for chunks larger than 500 KiB
  },
});
