import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
export default defineConfig({plugins:[react(),visualizer({filename:"dist/stats.html"})],resolve:{alias:{"@":path.resolve(__dirname,"./src"),"@components":path.resolve(__dirname,"./src/components"),"@pages":path.resolve(__dirname,"./src/pages"),"@hooks":path.resolve(__dirname,"./src/hooks"),"@data":path.resolve(__dirname,"./src/data"),"@styles":path.resolve(__dirname,"./src/styles")}},build:{rollupOptions:{output:{manualChunks:{vendor:["react","react-dom","react-router-dom"],motion:["framer-motion"],forms:["react-hook-form","zod"],ui:["lucide-react"]}}},chunkSizeWarningLimit:600}});
