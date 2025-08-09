import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/LunarTech/",   // Choose the correct repo name with trailing slash
  plugins: [react(), tailwindcss()]
});
