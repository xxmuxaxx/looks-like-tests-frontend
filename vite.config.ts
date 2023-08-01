import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      {
        find: /^~(.*)$/,
        replacement: "$1",
      },
    ],
  },
});
