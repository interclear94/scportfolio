import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/scportfolio/", // 꼭 저장소 이름으로 설정!
  plugins: [react()],
});
