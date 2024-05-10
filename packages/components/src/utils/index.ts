import type { App, DefineComponent, Plugin } from 'vue'
export type InstallType<T> = T & Plugin

export const install = <T>(components: T) => {
  (components as InstallType<T>).install = (app: App) => {
    // 注册组件, 不存在name就使用内部原型上的
    const name = (components as any).name || (components as any).__name
    app.component(name, components as InstallType<T>);
  }

  return components as InstallType<T>// 这里我不想返回这么多类型啊
}
