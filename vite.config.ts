import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    uni(),
  ],
  server: {
    // 允许CodeSandbox的主机访问
    port: 5166,
  }
})


