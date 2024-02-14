import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for the build
    assetsDir: '.', // Directory under outDir to place assets
    rollupOptions: {
      // Additional Rollup options
    },
  },
});