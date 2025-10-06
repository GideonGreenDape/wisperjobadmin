import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcssVite from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()
, tailwindcssVite()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
