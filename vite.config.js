import { defineConfig } from 'vite'
import glob from "glob";
import path from "path";
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  root: path.join(__dirname, "src"),
  build: {
    outDir: path.join(__dirname, "dist"),
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname, "src", "*.html")),
    },
  },
})
