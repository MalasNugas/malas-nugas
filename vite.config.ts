// Vercel-friendly build: disable the Cloudflare Worker bundler and
// emit a static SPA (dist/client/_shell.html + assets).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
    spa: { enabled: true },
  },
});
