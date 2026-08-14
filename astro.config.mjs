import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://programmerturtle.github.io',
  base: '/mintysws',
  vite: {
    plugins: [tailwindcss()],
  },
});
