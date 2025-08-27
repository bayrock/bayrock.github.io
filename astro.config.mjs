import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shojo.me',
  server: {
    port: 80
  },
  redirects: {
    '/home': '/#home'
  }
});
