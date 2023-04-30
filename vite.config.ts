import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import istanbul from "vite-plugin-istanbul";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  server: {
    host: true, // needed for the Docker Container port mapping to work
    port: 8081, // This is the port which we will use in docker
  },
});
