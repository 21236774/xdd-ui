<script lang="ts" setup>
import props from './props'
import { watch, onMounted } from 'vue'
import { themeStyle } from './config/index'
import { setThemeStyle } from './utils/index'
import './style/index.less'
const propsData = defineProps(props)

watch(() => propsData.theme, (newVal) => {
  const key = newVal !== 'dark' ? 'theme' : newVal
  console.log(key); 
  setThemeStyle(themeStyle[key], propsData.className)
})
onMounted(() => {
  const key = propsData.theme !== 'dark' ? 'theme' : 'dark'
  console.log(propsData.theme); 
  setThemeStyle(themeStyle[key], propsData.className)
})

</script>
<template>
  <div :class="['xdd-theme-' + theme, 'xdd-theme', className]"><slot/></div>
</template>