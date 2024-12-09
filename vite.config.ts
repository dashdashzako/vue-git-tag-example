import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { execSync } from 'node:child_process'

// https://vite.dev/config/
export default defineConfig({
  base: `https://dashdashzako.net/static/assets/mint-app`,
  build: {
    assetsDir: execSync('git describe --tags').toString().trim()
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
