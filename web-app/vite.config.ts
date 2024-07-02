import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

export default defineConfig({
  // base: '/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 7001, // you can replace this port with any port
    watch: {
      usePolling: true,
    },
  },
});
