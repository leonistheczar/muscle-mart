import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    port: 5000,
    open: true,
    host: true
  },
  build: {
    outDir: 'public',
  }
})
