import { defineConfig } from 'vite'
import { readdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import injectHTML from 'vite-plugin-html-inject'
import FullReload from 'vite-plugin-full-reload'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcDir = path.join(__dirname, 'src')
const htmlInput = readdirSync(srcDir)
  .filter((f) => f.endsWith('.html'))
  .map((f) => path.join(srcDir, f))

export default defineConfig({
  define: {
    global: {},
  },
  root: 'src',
  publicDir: path.join(__dirname, 'public'),
  build: {
    rollupOptions: {
      input: htmlInput,
    },
    outDir: '../dist',
  },
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, 'src/icons')],
      symbolId: 'icon-[name]',
      inject: 'body-last',
    }),
    injectHTML(),
    FullReload(['./src/**/**.html']),
  ],
})
