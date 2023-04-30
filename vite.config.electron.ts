import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "./",
  build: {
    outDir: "electron/app/dist",
    emptyOutDir: true,
    // minify: 'esbuild',
  },
  // server: {
  //   open: false, // do not open the browser as we use electron
  //   port: 3333
  // },
  plugins: [react()],
});
