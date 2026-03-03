// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  server: {
    open: true,
  },
  vite: {
    build: {
      rollupOptions: {
        external: [
          "phosphor-astro/GitHubLogoBold.astro",
          "phosphor-astro/LinkedInLogoBold.astro",
          "phosphor-astro/LinkBold.astro",
          "phosphor-astro/PaperPlaneTiltBold.astro",
        ],
      },
    },
    plugins: [tailwindcss()],
    ssr: {
      noExternal: [
        "phosphor-astro/GitHubLogoBold.astro",
        "phosphor-astro/LinkedInLogoBold.astro",
        "phosphor-astro/LinkBold.astro",
        "phosphor-astro/PaperPlaneTiltBold.astro",
      ],
    },
  },
});
