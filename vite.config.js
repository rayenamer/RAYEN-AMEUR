import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Chemins relatifs : fonctionne sur GitHub Pages quel que soit le nom du dépôt
  base: "./",
  plugins: [react()],
});
