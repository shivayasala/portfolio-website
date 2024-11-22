import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // Change to a different port
    open: true, // Automatically open the browser
    mimeTypes: {
      'text/jsx': 'text/javascript',
    },
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
