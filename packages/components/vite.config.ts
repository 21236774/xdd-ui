import { defineConfig } from 'vite'
import dts from "vite-plugin-dts" // 打包声明文件
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: "src",
      rollupTypes: true,
      copyDtsFiles: true,
      outDir: ["../../xdd-ui/es/components", "../../xdd-ui/lib/components"],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsconfigPath: "../../tsconfig.json",
    }),
    {
      name: "style",
      generateBundle(config, bundle) {
        //这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle);

        for (const key of keys) {
          const bundler: any = bundle[key as any];
          //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件
          this.emitFile({
            type: "asset",
            fileName: key, //文件名名不变
            source: bundler.code.replace(/\.less/g, ".css"),
          });
        }
      },
    },
  ],
  build: {
    outDir: 'xdd-ui', // 库模式, 打包后文件夹
    emptyOutDir: false, // 设置打包不删除原先内容
    lib: {
      entry: '../index.ts', // 入口
    },
    rollupOptions: {
      external: ['vue', /\.less/], // 不想要打包的安装包或文件
      output: [
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "../../xdd-ui/es",
        },
        {
           //打包格式
           format: "cjs",
           //打包后文件名
           entryFileNames: '[name].js',
           //让打包目录和我们目录对应
           preserveModules: true,
           exports: "named",
           //配置打包根目录
           dir: "../../xdd-ui/lib",
        }
      ],
    }
  }
})
