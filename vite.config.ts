/**
 * vite.config.ts文件是Vite的配置文件。
 * 作用：
 * 1. 配置开发服务器。
 * 可以设置开发服务器的端口号、代理服务器等。例如，可以通过以下配置将开发服务器的端口号设置为3000:
 * export default defineConfig({
 *   server:{
 *     port: 3000
 *   }
 * })
 * 2. 处理静态资源。
 * 可以指定如何处理项目中的静态资源，如图片、字体等。例如，可以通过以下配置告诉Vite如何处理.svg文件：
 * export default defineConfig({
 *   assetsInclude: ['**\/*.svg']
 * })
 * 3. 配置构建输出。
 * 可以设置构建后的输出目录、文件名等。例如，可以通过以下配置将构建后的输出目录设置为dist：
 * export default defineConfig({
 *   build:{
 *     outDir: 'dist'
 *   }
 * })
 * 4. 插件配置。
 * 可以配置各种Vite插件，以扩展其功能。例如，可以配置@vitejs/plugin-vue插件来支持Vue单文件组件：
 * export default defineConfig({
 *   plugins: [vue()]
 * })
 */

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
