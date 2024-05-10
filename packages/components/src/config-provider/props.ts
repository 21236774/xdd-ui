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
  },
  className: {
    type: String,
    default: 'xdd-theme'
  },
  darkBgColor: {
    type: String,
    default: '#333'
  },
  themeBgColor: {
    type: String,
    default: '#fff'
  },
}