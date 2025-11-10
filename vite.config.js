import react from "@vitejs/plugin-react";
import {execSync} from "node:child_process";
import * as path from "node:path";
import {fileURLToPath} from "node:url";
import {visualizer} from "rollup-plugin-visualizer";
import {defineConfig} from "vite";

import pkg from "./package.json";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commitHash = execSync("git rev-parse --short HEAD").toString().trim();
const buildTime = new Date().toISOString();

export default defineConfig(({mode})  => {
  const isAnalyze = mode === 'analyze'; // build analyze

  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@app": path.resolve(__dirname, "./src/app"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@features": path.resolve(__dirname, "./src/features"),
        "@infra": path.resolve(__dirname, "./src/infra"),
        "@shared": path.resolve(__dirname, "./src/shared"),
        '@style': path.resolve(__dirname, './src/style')
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@style/index" as *;`,
        },
      },
    },
    plugins: [
      react(),
      (isAnalyze ? [visualizer({
        filename: './dist/stats.html', // ✅ Generate file inside the dist folder
        open: true,                    // ✅ Automatically open in browser after build
        gzipSize: true,                // ✅ Show gzip-compressed bundle size
        brotliSize: true,              // ✅ Show Brotli-compressed bundle size
        template: 'treemap',           // or 'sunburst', 'network'
      })] : []),
    ],
    define: {
      __APP_VERSION__: JSON.stringify(pkg.version),
      __APP_COMMIT__: JSON.stringify(commitHash),
      __BUILD_TIME__: JSON.stringify(buildTime),
    },
    server: {
      historyApiFallback: true,
      allowedHosts: true,
      host: true
    }
  };
})