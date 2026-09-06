import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          app: path.resolve(__dirname, 'expense-insights/index.html'),
          privacy: path.resolve(__dirname, 'expense-insights/expense-insights-privacy.html'),
          terms: path.resolve(__dirname, 'expense-insights/expense-insights-terms.html'),
          deletion: path.resolve(__dirname, 'expense-insights/expense-insights-account-deletion.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
