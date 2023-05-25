<script lang="ts" setup>
import './style/index.less'
import defineProp from './props'
const props = defineProps(defineProp)

</script>

<template>
  <button :class="['xdd-' + type, 'xdd-button']"><slot /></button>
</template>

