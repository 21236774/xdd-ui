import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from "vite-plugin-dts";
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: "./packages",
      outputDir: ["./dist/es", "./dist/lib"],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: "./tsconfig.json",
    })
  ],
  build: {
    outDir: 'dist', // 库模式, 打包后文件夹
    lib: {
      entry: resolve(__dirname, './packages/index.ts'), // 入口
    },
    rollupOptions: {
      external: ['vue'], // 不想要打包的安装包
      output: [
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "./dist/es",
        },
        {
           //打包格式
           format: "cjs",
           //打包后文件名
           entryFileNames: "[name].js",
           //让打包目录和我们目录对应
           preserveModules: true,
           exports: "named",
           //配置打包根目录
           dir: "./dist/lib",
        }
      ],
    }
  }
})
