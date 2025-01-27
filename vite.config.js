import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/repository-name/' : '/', // Adjust the base path for production
}));