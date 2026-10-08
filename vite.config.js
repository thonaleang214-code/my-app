import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repository-name/', // ជំនួស your-repository-name ដោយឈ្មោះ Repository លើ GitHub របស់អ្នក
})