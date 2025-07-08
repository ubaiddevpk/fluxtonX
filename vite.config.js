import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // 👈 Your local host
    port: 5173,              // 👈 You can change this if needed
  },
})
