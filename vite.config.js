import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allowing connection from any host
  },
  preview: {
    allowedHosts: ['news-aggregator-8uta.onrender.com'], // Allowing the specific host
  }
});
