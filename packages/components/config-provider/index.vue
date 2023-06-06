<script lang="ts" setup>
import props from './props'
import { watch, onMounted } from 'vue'
import { themeStyle } from './config/index'
import { setThemeStyle } from './utils/index'
import './style/index.less'
const propsData = defineProps(props)

watch(() => propsData.theme, (newVal) => {
  const key = newVal !== 'dark' ? 'theme' : newVal
  setThemeStyle(themeStyle[key])
})
onMounted(() => {
  const key = propsData.theme !== 'dark' ? 'theme' : 'dark'
  setThemeStyle(themeStyle[key])
})

</script>
<template>
  <div :class="['xdd-theme-' + theme, 'xdd-theme']"><slot/></div>
</template>