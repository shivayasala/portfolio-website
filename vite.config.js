import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173, // Default port
    open: true, // Automatically open the browser
  },
  build: {
    outDir: 'dist', // Output directory for the build
  },
  resolve: {
    alias: {
      '@': '/src', // Example alias
    },
  },
});
