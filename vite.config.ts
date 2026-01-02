import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  root: 'src',
  base: '/',
  publicDir: '../static',
  plugins: [
    angular({
      tsconfig: resolve(__dirname, './tsconfig.json'),
    }),
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
      external: ['@angular/compiler'],
    },
  },
  server: {
    port: 8200,
    open: true,
    cors: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@app': resolve(__dirname, 'src/app'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/components'),
      '@utils': resolve(__dirname, 'src/utils')
    },
    extensions: ['.ts', '.js', '.json', '.less', '.css']
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  },
  optimizeDeps: {
    include: [
      '@angular/core',
      '@angular/platform-browser-dynamic',
      '@angular/common',
      '@angular/router',
      '@angular/forms',
      'rxjs',
      'rxjs/operators',
      'date-fns',
      // './app/charts/chart.module',
      // './app/systemlogs/systemlog.module',
      // './app/doubleball/doubleball.module',
      // './app/demos/demos.module',
    ],
  },
})