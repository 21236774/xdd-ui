# xddUI Vue3组件库
> xddUI 是一个基于Vue3的UI组件库，组件化、组件复用、代码抽离，支持按需引入

## 快速开始

本节将介绍如何在项目中使用 xddUI

### 在vue项目引入xddUI
> 你可以引入整个 xddUI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 xddUI。

#### 完整引入
> 在main.js中引入以下内容
```javascript
import Vue from 'vue';
import xddUI from 'xdd-ui';
import App from './App.vue';

Vue.use(xddUI);

new Vue({
  el: '#app',
  render: h => h(App)
})
```
> 如需获取TS类型输入提示，则需要在项目根目录 `tsconfig.json` 中配置一下
```json
{
  "include": ["...", "node_modules/xdd-ui/lib/**/*.d.ts"],
}
```

#### 按需引入
> 在vue组件中引入，这里示例vue3
```vue
<script setup lang="ts">
import { xButton } from 'xdd-ui/es/components'
</script>

<template>
  <div>
    <x-button type="success">成功按钮</x-button>
  </div>
</template>

```