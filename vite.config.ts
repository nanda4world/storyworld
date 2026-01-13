import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/storyworld/',   // 🔥 THIS IS MANDATORY FOR GITHUB PAGES
})
