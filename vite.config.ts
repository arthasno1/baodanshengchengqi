import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

/**
 * Vite配置文件
 * @see https://vite.dev/config/
 */
export default defineConfig({
  // 开发或生产环境服务的公共基础路径
  // GitHub Pages部署时需要设置为仓库名，本地开发使用'./'
  base: process.env.NODE_ENV === 'production' ? '/baodanshengchengqi/' : './',

  // 路径解析配置
  resolve: {
    alias: {
      // 设置@指向src目录
      '@': path.resolve(__dirname, 'src')
    }
  },

  // 插件配置
  plugins: [
    // Vue插件
    vue(),
    // 自动导入API
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    // 自动导入组件
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],

  // 开发服务器配置
  server: {
    // 自动打开浏览器
    open: true
  },

  // 构建配置
  build: {
    // 压缩配置
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生产环境移除console
        drop_console: true,
        // 生产环境移除debugger
        drop_debugger: true
      }
    },

    // 构建输出配置
    rollupOptions: {
      output: {
        // 分包策略
        manualChunks(id) {
          // 将node_modules中的代码单独打包
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
        // 入口文件名格式
        entryFileNames: 'assets/[name].[hash].js',
        // 块文件名格式
        chunkFileNames: 'assets/[name].[hash].js',
        // 资源文件名格式
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    },

    // 小于此阈值的导入或引用资源将内联为base64编码
    assetsInlineLimit: 4096,
    // 启用CSS代码分割
    cssCodeSplit: true,
    // 禁用源码映射
    sourcemap: false,
    // 代码分割警告大小限制
    chunkSizeWarningLimit: 1500,
    // 动态导入配置
    dynamicImportVarsOptions: {
      // 禁用动态导入错误警告
      warnOnError: false
    }
  }
})
