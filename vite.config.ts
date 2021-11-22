import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'lib',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'vue3-quiljs'
    },
    rollupOptions: {
      external: ['vue'],
      strictDeprecations: true,
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
