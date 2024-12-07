import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    mimeTypes: {
      'text/jsx': 'application/javascript', // Ensure correct MIME type for JSX files
    },
    hmr: {
      overlay: false, // Disable overlay for HMR errors
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]',
      },
    },
    minify: 'esbuild', // Use 'terser' for more advanced minification
  },
  resolve: {
    alias: {
      '@': '/src',
      'assets': '/src/assets',
    },
  },
  esbuild: {
    loader: {
      '.js': 'jsx',
    },
  },
});
