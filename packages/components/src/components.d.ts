import * as components from './index'

// declare module TypeScript 中的模块声明语句，用于告诉编译器如何解析特定模块的类型
declare module '@vue/runtime-core' {
  // @vue/runtime-core 是一个核心模块，用于支持 Vue.js 应用程序的运行时核心，包括虚拟 DOM、组件实例、响应式系统等
  export interface GlobalComponents {
    xButton: typeof components.XButton;
    xModal: typeof components.XModal;
    xConfigProvider: typeof components.XConfigProvider;
    xTab: typeof components.XTab;
  }
}
export {};