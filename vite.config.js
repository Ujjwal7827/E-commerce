import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'Ecommerce-main',
  plugins: [react()],
  build: {
    outDir: '../dist'
  }
})
