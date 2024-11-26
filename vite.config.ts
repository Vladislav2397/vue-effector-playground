import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const replace = (path: string) => fileURLToPath(new URL(path, import.meta.url))

  return {
    plugins: [vue()],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: [
        {
          find: '@',
          replacement: replace('./src')
        }
      ]
    },
  }
})
