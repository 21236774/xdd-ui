import { h, Slot, createApp, App } from 'vue'
import Modal from '../modal.vue'
import { ModalProps } from '../props'

const useModal = () => {
  let app: App
  const open = (components: Slot, props: ModalProps) => {
    const modal = h(Modal, props, components)
    app = createApp(modal)
    const dom = document.createElement('div')
    document.getElementsByTagName('body')[0].appendChild(dom)
    app.mount(dom)
  }
  const destroy = () => {
    if(app) app.unmount()
  }
  return { open, destroy }
}
export { useModal }
