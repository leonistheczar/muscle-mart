import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    port: 5000,
    open: true,
    host: true
  },
  build:{
    outDir: 'dist',
    rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          about: resolve(__dirname, 'about.html'),
          products: resolve(__dirname, 'products.html'),
          contact: resolve(__dirname, 'contact.html'),
          reviews: resolve(__dirname, 'reviews.html'),
        }
      }
  }
})
