
export default {
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
  },
  cancel: {
    type: Function,
    default: () => {
      return function () {}
    }
  },
  confirm: {
    type: Function,
    default: () => {
      return function () {}
    }
  }
}