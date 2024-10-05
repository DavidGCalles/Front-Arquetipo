import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    server: {
      host: '0.0.0.0', // Listen on all network interfaces
      port: 8080,       // Default port is 3000, change as needed
      // Ensure your firewall allows traffic on this port.
      hmr: {
        host: '192.168.1.78', // Replace 'your-local-ip' with the actual IP
      }
    },
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  });
