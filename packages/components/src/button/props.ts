import { type PropType } from 'vue'
export default {
  type: {
    type: String as PropType<'success' | 'info' | 'warning' | 'error' | 'default'>,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<'tiny' | 'small' | 'medium' | 'large'>,
    default: 'medium'
  }
}