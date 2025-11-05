import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

const BACKEND_PORT = 3000;
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  server: {
    port: 5174,
    // port: 3000,
    proxy: {
      "/api": {
        target: `http://localhost:${BACKEND_PORT}`,
        changeOrigin: true,
        // Rewrite the URL: removes '/api' before sending it to the backend
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
