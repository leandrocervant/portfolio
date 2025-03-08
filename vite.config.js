import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "node:path";

export default defineConfig({
  base: "/portfolio",
  css: {
    modules: {
      generateScopedName(className, file) {
        const parts = [];

        const filePath = file.split("?")[0];
        const fileName = path.basename(filePath, ".module.css");
        const foldersPath = path.dirname(filePath).split(path.sep);
        const folderName = foldersPath[foldersPath.length - 1];

        const componentName = fileName !== "root" ? fileName : folderName;

        parts.push(componentName);

        if (className !== "root") {
          parts.push(className);
        }

        return parts.join("__");
      },
    },
  },
  plugins: [react(), svgr()],
});
