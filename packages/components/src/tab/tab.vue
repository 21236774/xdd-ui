<script lang="ts" setup>
import { watch, onMounted } from 'vue'
defineOptions({
  name: 'x-tag'
})
const porps = defineProps({
  type: {
    type: String,
    default: 'default'
  }
})
onMounted(() => {
  console.log('tab')
})

</script>

<template>
  <button>
    <slot />
  </button>
</template>

