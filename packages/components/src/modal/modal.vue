<script lang="ts" setup>
import { defineProps, defineOptions } from 'vue'
import defineProp from './props'
import Dialog from './dialog/index.vue'
import './style/index.less'

defineOptions({
  name: 'x-modal'
})


const props = defineProps(defineProp)
const emit = defineEmits(['update:show', 'cancel-click', 'confirm-click'])

const setShow = (flag: boolean, isUpdate: boolean = true) => {
  if (!isUpdate) return
  emit('update:show', flag)
}

const cancel = () => {
  setShow(false)
  emit('cancel-click')
}

const confirm = () => {
  setShow(false)
  emit('confirm-click')
}

</script>
<template>
  <Teleport to="body">
    <Transition name="mask">
      <div class="xdd-mask" @click="setShow(false, maskClosable)" v-if="show" />
    </Transition>
    <div class="xdd-modal-box xdd-theme" :style="{ zIndex: show ? 99 : -1 }">
      <Transition name="fade-modal">
        <div class="xdd-modal" v-if="show">
          <div v-if="props?.preset">
            <Dialog
              :title="title"
              :content="content"
              :cancelText="cancelText"
              :confirmText="confirmText"
              :cancel="cancel"
              :confirm="confirm"
            >
              <slot />
              <template #header>
                <slot name="header" />
              </template>
              <template #action>
                <slot name="action" />
              </template>
            </Dialog>
          </div>
          <div v-else><slot /></div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>