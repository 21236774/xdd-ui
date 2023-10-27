
export const setThemeStyle = (themeMap: object, className = 'xdd-theme') => {
  console.log('className: ', className);
  type FooType = keyof typeof themeMap
  const doms = document.getElementsByClassName(className)
  for (let i = 0; i < doms.length; i++) {
    const dom = doms[i] as HTMLElement;
    Object.keys(themeMap).forEach((key) => {
      dom.style.setProperty(`--${key}`, themeMap[key as FooType]);
    });
  }
}