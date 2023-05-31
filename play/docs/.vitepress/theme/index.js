import DefaultTheme from "vitepress/theme";
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    if (!import.meta.env.SSR) {
      const plugin = await import('xdd-ui')
      app.use(plugin.default)
    }
  },
}