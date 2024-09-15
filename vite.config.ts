import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';
import serve from 'rollup-plugin-serve';

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [
      react(),
      reactRefresh(),
      serve({
        open: true,
        contentBase: '',
        historyApiFallback: true,
      }),
    ],
    server: {
      middlewareMode: 'html',
    },
  }
)