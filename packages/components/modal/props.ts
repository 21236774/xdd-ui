import { type PropType } from 'vue'
export default {
  show: {
    type: Boolean,
    default: false
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  preset: String as PropType<'card' | 'dialog'>,
  title: {
    type: String,
    default: '标题-我是头头'
  },
  content: {
    type: String,
    default: '你确定？'
  },
  cancelText: {
    type: String,
    default: '取消'
  },
  confirmText: {
    type: String,
    default: '确定'
  }
}