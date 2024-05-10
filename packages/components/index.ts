import { App } from "vue"
import * as components from './src/index'
export * from './src/index'
// 导出的对象必须具有 install，才能被 Vue.use() 方法安装全局注册
const xddUI = {
  install(app: App) {
    for (const c in components) {
      app.use(components[c as keyof typeof components])
    }
  },
}

export default xddUI
