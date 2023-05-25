# 快速开始

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

#### 按需引入
> 在vue组件中引入，这里示例vue3
```vue
<script setup lang="ts">
import { xddButton } from 'xdd-ui/es/components'
</script>

<template>
  <div>
    <xdd-button type="success">成功按钮</xdd-button>
  </div>
</template>

```