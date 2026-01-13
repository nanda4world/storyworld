import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ IMPORTANT: repo name must match exactly
export default defineConfig({
  base: '/storyworld/',
  plugins: [react()],
})
