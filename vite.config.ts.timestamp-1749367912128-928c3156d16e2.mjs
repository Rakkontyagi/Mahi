// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
    include: ["framer-motion", "three", "@react-three/fiber", "@react-three/drei"]
  },
  build: {
    // Ultra-optimized build configuration
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug", "console.warn"]
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
          "react-vendor": ["react", "react-dom"],
          // Animations
          "animation-vendor": ["framer-motion"],
          // 3D Graphics
          "three-vendor": ["three", "@react-three/fiber", "@react-three/drei"],
          // Icons
          "icon-vendor": ["lucide-react"]
        },
        // Optimize chunk names
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]"
      }
    },
    // Enable all optimizations
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1e3,
    // Enable source maps for production debugging
    sourcemap: false,
    // Optimize CSS
    cssCodeSplit: true,
    // Enable tree shaking
    target: "esnext"
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
    drop: ["console", "debugger"],
    // Enable all optimizations
    legalComments: "none",
    // Target modern browsers
    target: "esnext"
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
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IFsnbHVjaWRlLXJlYWN0J10sXG4gICAgaW5jbHVkZTogWydmcmFtZXItbW90aW9uJywgJ3RocmVlJywgJ0ByZWFjdC10aHJlZS9maWJlcicsICdAcmVhY3QtdGhyZWUvZHJlaSddXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgLy8gVWx0cmEtb3B0aW1pemVkIGJ1aWxkIGNvbmZpZ3VyYXRpb25cbiAgICBtaW5pZnk6ICd0ZXJzZXInLFxuICAgIHRlcnNlck9wdGlvbnM6IHtcbiAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSxcbiAgICAgICAgZHJvcF9kZWJ1Z2dlcjogdHJ1ZSxcbiAgICAgICAgcHVyZV9mdW5jczogWydjb25zb2xlLmxvZycsICdjb25zb2xlLmluZm8nLCAnY29uc29sZS5kZWJ1ZycsICdjb25zb2xlLndhcm4nXVxuICAgICAgfSxcbiAgICAgIG1hbmdsZToge1xuICAgICAgICBzYWZhcmkxMDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGZvcm1hdDoge1xuICAgICAgICBzYWZhcmkxMDogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgIC8vIENvcmUgUmVhY3RcbiAgICAgICAgICAncmVhY3QtdmVuZG9yJzogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbiAgICAgICAgICAvLyBBbmltYXRpb25zXG4gICAgICAgICAgJ2FuaW1hdGlvbi12ZW5kb3InOiBbJ2ZyYW1lci1tb3Rpb24nXSxcbiAgICAgICAgICAvLyAzRCBHcmFwaGljc1xuICAgICAgICAgICd0aHJlZS12ZW5kb3InOiBbJ3RocmVlJywgJ0ByZWFjdC10aHJlZS9maWJlcicsICdAcmVhY3QtdGhyZWUvZHJlaSddLFxuICAgICAgICAgIC8vIEljb25zXG4gICAgICAgICAgJ2ljb24tdmVuZG9yJzogWydsdWNpZGUtcmVhY3QnXVxuICAgICAgICB9LFxuICAgICAgICAvLyBPcHRpbWl6ZSBjaHVuayBuYW1lc1xuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2Fzc2V0cy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS1baGFzaF0uW2V4dF0nXG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBFbmFibGUgYWxsIG9wdGltaXphdGlvbnNcbiAgICByZXBvcnRDb21wcmVzc2VkU2l6ZTogdHJ1ZSxcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDEwMDAsXG4gICAgLy8gRW5hYmxlIHNvdXJjZSBtYXBzIGZvciBwcm9kdWN0aW9uIGRlYnVnZ2luZ1xuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgLy8gT3B0aW1pemUgQ1NTXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuICAgIC8vIEVuYWJsZSB0cmVlIHNoYWtpbmdcbiAgICB0YXJnZXQ6ICdlc25leHQnXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIC8vIERldmVsb3BtZW50IG9wdGltaXphdGlvbnNcbiAgICBobXI6IHtcbiAgICAgIG92ZXJsYXk6IGZhbHNlXG4gICAgfSxcbiAgICAvLyBFbmFibGUgY29tcHJlc3Npb25cbiAgICBtaWRkbGV3YXJlTW9kZTogZmFsc2VcbiAgfSxcbiAgLy8gRW5hYmxlIGV4cGVyaW1lbnRhbCBmZWF0dXJlc1xuICBlc2J1aWxkOiB7XG4gICAgLy8gUmVtb3ZlIGNvbnNvbGUgbG9ncyBpbiBwcm9kdWN0aW9uXG4gICAgZHJvcDogWydjb25zb2xlJywgJ2RlYnVnZ2VyJ10sXG4gICAgLy8gRW5hYmxlIGFsbCBvcHRpbWl6YXRpb25zXG4gICAgbGVnYWxDb21tZW50czogJ25vbmUnLFxuICAgIC8vIFRhcmdldCBtb2Rlcm4gYnJvd3NlcnNcbiAgICB0YXJnZXQ6ICdlc25leHQnXG4gIH0sXG4gIC8vIENTUyBvcHRpbWl6YXRpb25zXG4gIGNzczoge1xuICAgIGRldlNvdXJjZW1hcDogZmFsc2UsXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgc2Nzczoge1xuICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCJzcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7YFxuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLG9CQUFvQjtBQUN0UCxPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxjQUFjO0FBQUEsSUFDeEIsU0FBUyxDQUFDLGlCQUFpQixTQUFTLHNCQUFzQixtQkFBbUI7QUFBQSxFQUMvRTtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBQUEsSUFFTCxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxlQUFlO0FBQUEsUUFDZixZQUFZLENBQUMsZUFBZSxnQkFBZ0IsaUJBQWlCLGNBQWM7QUFBQSxNQUM3RTtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sVUFBVTtBQUFBLE1BQ1o7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLFVBQVU7QUFBQSxNQUNaO0FBQUEsSUFDRjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBO0FBQUEsVUFFWixnQkFBZ0IsQ0FBQyxTQUFTLFdBQVc7QUFBQTtBQUFBLFVBRXJDLG9CQUFvQixDQUFDLGVBQWU7QUFBQTtBQUFBLFVBRXBDLGdCQUFnQixDQUFDLFNBQVMsc0JBQXNCLG1CQUFtQjtBQUFBO0FBQUEsVUFFbkUsZUFBZSxDQUFDLGNBQWM7QUFBQSxRQUNoQztBQUFBO0FBQUEsUUFFQSxnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsc0JBQXNCO0FBQUEsSUFDdEIsdUJBQXVCO0FBQUE7QUFBQSxJQUV2QixXQUFXO0FBQUE7QUFBQSxJQUVYLGNBQWM7QUFBQTtBQUFBLElBRWQsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFFBQVE7QUFBQTtBQUFBLElBRU4sS0FBSztBQUFBLE1BQ0gsU0FBUztBQUFBLElBQ1g7QUFBQTtBQUFBLElBRUEsZ0JBQWdCO0FBQUEsRUFDbEI7QUFBQTtBQUFBLEVBRUEsU0FBUztBQUFBO0FBQUEsSUFFUCxNQUFNLENBQUMsV0FBVyxVQUFVO0FBQUE7QUFBQSxJQUU1QixlQUFlO0FBQUE7QUFBQSxJQUVmLFFBQVE7QUFBQSxFQUNWO0FBQUE7QUFBQSxFQUVBLEtBQUs7QUFBQSxJQUNILGNBQWM7QUFBQSxJQUNkLHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
