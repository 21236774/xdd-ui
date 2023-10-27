import { App } from "vue";
import xddButton from './button/index.vue'
import configProvider from './config-provider/index.vue'
import xddModal from './modal/index.vue'

export { xddButton }

// 导出的对象必须具有 install，才能被 Vue.use() 方法安装全局注册
const xddUI = {
  install(app: App) {
    app.component("xButton", xddButton)
    app.component("xConfigProvider", configProvider)
    app.component("xModal", xddModal)
  },
}

export default xddUI
