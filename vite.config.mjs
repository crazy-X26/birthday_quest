import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: '/birthday_quest/',
  
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