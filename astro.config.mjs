import { defineConfig, sharpImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'

import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), react(), vue()],
  markdown: {
    shikiConfig: {
      theme: 'material-theme',
    },
  },
  image: {
    service: sharpImageService({ limitInputPixels: false, failOnError: false, defaultQuality: 80 }),
  }
})
