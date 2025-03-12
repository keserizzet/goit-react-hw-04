import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // 🚀 VerceL için doğru URL yolunu sağlar
  build: {
    outDir: "dist", // VerceL için doğru build dizini
  },
});
