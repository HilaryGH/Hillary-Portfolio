import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),
  ],
  build: {
    outDir: 'dist', // Ensure the build directory is 'dist'
    target: 'esnext', // Ensure modern JavaScript is used
    rollupOptions: {
      output: {
        format: 'esm', // Ensure JavaScript is output as ES Modules
      },
    },
  },
})
