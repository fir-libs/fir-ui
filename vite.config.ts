/// <reference types="histoire" />
/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts';
import { HstVue } from '@histoire/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
        entry: './src/main.ts',
        name: 'fir-ui-kit',
        fileName: (format) => `fir-ui-kit.${format}.js`,
        formats: ['es', 'umd'],
    },
    outDir: './dist',
    rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled into your library
        external: ['vue'],
        output: {
            // Provide global variables to use in the UMD build for externalized deps
            globals: {
                vue: 'Vue',
            },
        },
    },
  },
  plugins: [
      vue(),
      dts({
          insertTypesEntry: true,
      }),
  ],
  histoire: {
    plugins: [
      HstVue(),
    ],
  }
})
