import DefaultTheme from "vitepress/theme";
// import xddUI from "@xdd-ui/components/index"; // 本地调试组件用打包到线上得注释
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    if (!import.meta.env.SSR) {
      const plugin = await import('xdd-ui') // 打包时候把这个打开
      app.use(plugin.default) // 打包时候把这个打开
      // app.use(xddUI)// 本地调试组件用打包到线上得注释
    }
  },
}