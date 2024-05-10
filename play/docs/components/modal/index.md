#### 基本用法
> 模态框的基础用法，你可以把任何东西放进去，比如一个div。
<ClientOnly>
<x-config-provider :theme="!isDark ? 'theme' : 'dark'" darkBgColor="rgb(24, 24, 28);">
  <x-button @click="show = !show">点吧</x-button>
  <x-modal v-model:show="show">
    <div>最基础用法</div>
  </x-modal>
</x-config-provider>
</ClientOnly>

::: details 显示代码

```Vue
<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>

<template>
  <x-button @click="show = !show">点吧</x-button>
  <x-modal v-model:show="show">
    <div>基础用法</div>
  </x-modal>
</template>

```
:::
<br>

#### 使用 Dialog 预设
> `Dialog`  预设的例子、通过maskClosable设置为false控制点击遮罩层不关闭弹窗。
<ClientOnly>
<x-config-provider :theme="!isDark ? 'theme' : 'dark'">
  <x-button @click="showDialog = !showDialog">来吧</x-button>
  <x-modal
    v-model:show="showDialog"
    :maskClosable="false"
    preset="dialog"
    title="标题栏"
    content="内容栏"
    cancelText="取消按钮"
    confirmText="确认按钮"
  />
</x-config-provider>
</ClientOnly>

::: details 显示代码

```Vue
<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>

<template>
  <x-button @click="show = !show">来吧</x-button>
  <x-modal
    v-model:show="show"
    :maskClosable="false"
    preset="dialog"
    title="标题栏"
    content="内容栏"
    cancelText="取消按钮"
    confirmText="确认按钮"
  />
</template>
```
:::
<br>

#### 使用 Dialog 预设的插槽
> `Dialog`  插槽也会随着预设变动。

<ClientOnly>
<x-config-provider :theme="!isDark ? 'theme' : 'dark'">
  <x-button @click="showDialogSlot = !showDialogSlot">来吧</x-button>
  <x-modal v-model:show="showDialogSlot" preset="dialog">
    <template #header>
      <div>我是插槽头部</div>
    </template>
    <div>我是插槽内容</div>
    <template #action>
      <div>我是插槽操作的地方</div>
    </template>
  </x-modal>
</x-config-provider>
</ClientOnly>

::: details 显示代码

```Vue
<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>

<template>
 <x-button @click="show = !show">来吧</x-button>
  <x-modal v-model:show="show" preset="dialog">
    <template #header>
      <div>我是插槽头部</div>
    </template>
    <div>我是插槽内容</div>
    <template #action>
      <div>我是插槽操作的地方</div>
    </template>
  </x-modal>
</template>
```
:::

<script setup>
import { ref } from 'vue'
const show = ref(false)
const showDialog = ref(false)
const showDialogSlot = ref(false)
import { useData } from 'vitepress'
const { isDark } = useData()
</script>