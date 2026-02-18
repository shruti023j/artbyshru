import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    react({
      include: "**/*.{jsx,tsx,js,ts}",
    })
  ],
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist'
  },
  server: {
    port: 5000,
    host: '0.0.0.0',
    allowedHosts: [
      '7a10254a-b64c-4aef-b7b5-a17002d12a5d-00-ll4t49bq00x0.spock.replit.dev',
      '.replit.dev',
      'localhost'
    ]
  },
  esbuild: {
    include: /\.(tsx?|jsx?)$/,
    loader: 'jsx',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.ts': 'tsx',
        '.jsx': 'jsx',
        '.tsx': 'tsx'
      }
    }
  }
});