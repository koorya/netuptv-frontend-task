import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr({ exportAsDefault: true, svgrOptions: { replaceAttrValues: { width: '{props.width}' } } }),
    react(),
    checker({ typescript: true }),
  ],
});
