import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',  // Adjust this to your GitHub repo name if necessary
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // Adjust if you have a different src directory
    }
  },
  build: {
    outDir: 'dist',  // Output directory for build files
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),  // Main HTML entry point
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';  // Separate vendor chunk for dependencies
          }
        },
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`
      }
    },
    chunkSizeWarningLimit: 500  // Increase or decrease this limit based on your requirements
  }
});
