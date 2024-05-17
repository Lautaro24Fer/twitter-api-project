import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  env: {
    PUBLIC_API_KEY: "f21dbb1ea7mshbc36ea4c31da0e2p1012b5jsne3e9c888090a",
    PUBLIC_API_HOST: "twitter154.p.rapidapi.com"
  }
});