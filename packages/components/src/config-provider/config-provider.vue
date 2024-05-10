<script lang="ts" setup>
import props from './props'
import { watch, onMounted } from 'vue'
import { themeStyle } from './config/index'
import { setThemeStyle } from './utils/index'
import './style/index.less'
const propsData = defineProps(props)
defineOptions({
  name: 'x-config-provider'
})

 console.log(propsData?.darkBgColor)
if(propsData.themeBgColor) {
  themeStyle.theme['x-bg-color'] = propsData.themeBgColor
}
if(propsData.darkBgColor) {
  themeStyle.dark['x-bg-color'] = propsData.darkBgColor
}

watch(() => propsData.theme, (newVal) => {
  const key = newVal !== 'dark' ? 'theme' : newVal
  setThemeStyle(themeStyle[key], 'body')
})
onMounted(() => {
  const key = propsData.theme !== 'dark' ? 'theme' : 'dark'
  setThemeStyle(themeStyle[key], 'body')
})

</script>
<template>
  <div :class="['xdd-theme-' + theme, 'xdd-theme', className]"><slot/></div>
</template>