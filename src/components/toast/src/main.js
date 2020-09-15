import Vue from 'vue'
import Main from './main.vue'

const ToastConstructor = Vue.extend(Main)

let instance
const toast = function (options) {
  instance = new ToastConstructor({
    data: options || {}
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  return instance.vm
}
export default toast
