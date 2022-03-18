import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
  base: './',
  define: {
    'import.meta.env.APP_VERSION': JSON.stringify(pkg.version)
  },
  plugins: [vue()]
})
