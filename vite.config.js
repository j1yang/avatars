import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/avatars.js',
      name: 'Avatars',
      fileName: format => {
        if (format === 'es') {
          return 'avatars.module.js';
        } else if (format === 'umd') {
          return 'avatars.min.js';
        }
      }
    },
    rollupOptions: {
      external: ['three'],
      output: {
        globals: {
          three: 'THREE'
        }
      }
    }
  }
})