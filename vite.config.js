import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/e-mart/' : '/', // Adjust the base path for production
}));