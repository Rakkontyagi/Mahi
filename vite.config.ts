import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['framer-motion', 'three', '@react-three/fiber', '@react-three/drei']
  },
  build: {
    // Ultra-optimized build configuration
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      },
      mangle: {
        safari10: true
      },
      format: {
        safari10: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React
          'react-vendor': ['react', 'react-dom'],
          // Animations
          'animation-vendor': ['framer-motion'],
          // 3D Graphics
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          // Icons
          'icon-vendor': ['lucide-react']
        },
        // Optimize chunk names
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Enable all optimizations
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging
    sourcemap: false,
    // Optimize CSS
    cssCodeSplit: true,
    // Enable tree shaking
    target: 'esnext'
  },
  server: {
    // Development optimizations
    hmr: {
      overlay: false
    },
    // Enable compression
    middlewareMode: false
  },
  // Enable experimental features
  esbuild: {
    // Remove console logs in production
    drop: ['console', 'debugger'],
    // Enable all optimizations
    legalComments: 'none',
    // Target modern browsers
    target: 'esnext'
  },
  // CSS optimizations
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/variables.scss";`
      }
    }
  }
});