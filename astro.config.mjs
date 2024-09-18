import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import keystatic from "@keystatic/astro";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), react(), markdoc(), keystatic()],
  output: "hybrid",
  adapter: cloudflare(),
  vite: { define: { "process.env": process.env } },
});
