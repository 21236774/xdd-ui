
export const setThemeStyle = (themeMap: object) => {
  type FooType = keyof typeof themeMap
  Object.keys(themeMap).forEach((key) => {
    const dom = <HTMLElement>document.getElementsByClassName('xdd-theme')[0]
    dom.style.setProperty(`--${key}`, themeMap[key as FooType])
  })
}