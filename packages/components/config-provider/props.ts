export default {
  theme: {
    type: String,
    default: 'default'
  },
  themeOverrides: {
    type: Object,
    default: () => {
      return {}
    }
  }
}