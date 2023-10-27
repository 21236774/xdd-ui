<script lang="ts" setup>
import './style/index.less'
import defineProp from './props'
defineProps(defineProp)

</script>

<template>
  <button :class="[
  'xdd-' + type,
  'xdd-button',
  'xdd-button-'+disabled,
  'xdd-button-'+size
  ]" 
  :disabled="disabled"
  >
    <slot />
  </button>
</template>

