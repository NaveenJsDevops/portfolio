import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Limit chunk sizes to avoid warnings
    chunkSizeWarningLimit: 1000, // Adjust this as needed (default is 500 KiB)

    rollupOptions: {
      output: {
        // Manual chunking to split large libraries or infrequent modules
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react-vendor'; // Group React-related dependencies
            }
            if (id.includes('lodash')) {
              return 'lodash'; // Group lodash into its own chunk
            }
            return 'vendor'; // Group other node_modules
          }
        },
      },
    },
  },
});
