import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        book: path.resolve(__dirname, 'book/index.html'),
        studios: path.resolve(__dirname, 'studios/index.html'),
        playbook: path.resolve(__dirname, 'playbook/index.html'),
        events: path.resolve(__dirname, 'events/index.html'),
        tools: path.resolve(__dirname, 'tools/index.html'),
      },
    },
  }
});
