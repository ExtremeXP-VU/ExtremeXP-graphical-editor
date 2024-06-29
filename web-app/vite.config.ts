import { defineConfig } from 'vite';
// import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '0.0.0.0',
  //   port: 8080, // you can replace this port with any port
  //   watch: {
  //     usePolling: true,
  //   },
  // },
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url)),
  //   },
  // },
});
