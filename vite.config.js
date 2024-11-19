import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'X-Content-Type-Options': 'nosniff',
    },
    watch: {
      usePolling: true, // Add this to enable polling
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Add this alias configuration
    },
    extensions: ['.js', '.jsx'],
  },
});
