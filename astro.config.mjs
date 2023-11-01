import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://castelll0009.github.io',
  base: '/desk',
  integrations: [tailwind()]
});