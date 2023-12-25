import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({ // base: '/CarlSite/',
  // root: 'src',  // Root directory set to 'src'
  // build: {
  //   outDir: '../dist',  // Output directory set to '../dist'
    // minify: false,
    // sourcemap: true
  // },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
