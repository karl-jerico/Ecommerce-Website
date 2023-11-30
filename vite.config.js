import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import * as path from 'path'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    port: Number(process.env.PORT)
  },
    'process.env.PORT': '${process.env.PORT}',
    'process.env.TEST': '"${process.env.TEST}"',
})
