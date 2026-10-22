import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { mkdir, writeFile } from 'node:fs/promises'
import sass from 'sass'

export default defineConfig({
  base: '/birthday_quest/',

  plugins: [
    {
      name: 'compile-scss',
      async buildStart() {
        const result = sass.compile('scss/styles.scss')
        await mkdir('css', { recursive: true })
        await writeFile('css/styles.css', result.css)
      },
    },
  ],
  
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        levelOne: resolve(import.meta.dirname, 'level-one.html'),
        levelTwo: resolve(import.meta.dirname, 'level-two.html'),
        levelThree: resolve(import.meta.dirname, 'level-three.html'),
        levelFour: resolve(import.meta.dirname, 'congrats.html'),
      },
    },
  },
})
