import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shojo.me',
  server: {
    port: 80
  },
  redirects: {
    '/home': '/#home',
    '/monkeytype': '/typing/#heading',
    '/keyboard': '/typing/#heading',
    '/letterboxd': '/cinema/#heading',
    '/movies': '/cinema/#heading',
    '/films': '/cinema/#heading',
    '/steam': '/games/#heading',
    '/lastfm': '/music/#heading',
    '/myanimelist': '/anime/#heading',
    '/goodreads': '/books/#heading'
  }
});
