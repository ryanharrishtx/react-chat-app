import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3000, // Change to your desired port
    proxy: {
      '/api': { target: 'http://localhost:3001', secure: false, changeOrigin: true },
    },
  },
  build: {
    outDir: 'dist', // Output directory for the build
    assetsDir: '.', // Directory under outDir to place assets
    rollupOptions: {
      // Additional Rollup options
    },
  },
});