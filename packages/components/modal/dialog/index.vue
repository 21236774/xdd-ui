<script lang="ts" setup>
import { useSlots, ref } from 'vue'
import XButton from '../../button/index.vue'
import '../style/dialog.less'
import defineProp from './props'
defineProps(defineProp)

const slots = useSlots()
const childrenSlot = ref(false)
const headerSlot = ref(false)
const actionSlot = ref(false)

interface SlotData {
  children: any[]; // 假设子节点是任意类型的数组
}
const getSlot = (slotsData: SlotData[]): boolean => {
  return slotsData.length > 0 && slotsData[0].children?.length !== 0;
}
if (slots.default) childrenSlot.value = getSlot(slots.default() as SlotData[])
if (slots.header) headerSlot.value = getSlot(slots.header()  as SlotData[])
if (slots.action) actionSlot.value = getSlot(slots.action() as SlotData[])

</script>
<template>
  <div class="xdd-modal-dialog">
    <div class="xdd-modal-dialog-title">
      <div v-if="!headerSlot">{{ title }}</div>
      <slot v-else name="header"/>
    </div>
    <div class="xdd-modal-dialog-content" >
      <div v-if="!childrenSlot">{{ content }}</div>
      <slot v-else />
    </div>
    <div class="xdd-modal-dialog-preset" v-if="actionSlot">
      <slot name="action" />
    </div>
    <div class="xdd-modal-dialog-preset" v-else>
      <XButton size="tiny" @click="cancel()">{{ cancelText }}</XButton>
      <XButton type="success" size="tiny" @click="confirm()">{{ confirmText }}</XButton>
    </div>
  </div>
</template>