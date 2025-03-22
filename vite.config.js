import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/social-links-profile',
  plugins: [vue()],
  server: {
    port: 3000,
  },
})
