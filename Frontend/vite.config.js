import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'http://localhost:3000',//same ghar se hai isliye allow kar diya(same origin)
    },
  },
  plugins: [react()],
})
