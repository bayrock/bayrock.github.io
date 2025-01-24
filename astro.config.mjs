import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://bayrock.dev',
  server: {
    port: 80
  },
  redirects: {
    '/home': '/#home'
  }
});