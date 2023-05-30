import * as components from './components/index';
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    xddButton: typeof components.Button;
  }
}
export {};