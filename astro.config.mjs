import { defineConfig } from 'astro/config';

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: 'https://bayrock.dev',
  server: {
    port: 80
  },
  integrations: [solidJs()]
});
