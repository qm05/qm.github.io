import Vue from 'vue';
import Toast from './toast';
let toastVM = null;

Toast.install = function (Vue) {
  Vue.component(Toast.name, Toast);
}

//创建构造器
const ToastConstructor = Vue.extend(Toast);

const initInstance = () => {
  //创建实例，并进行挂载
  toastVM = new ToastConstructor();
}

Toast.root = function (msg, options) {
  options = options || {};
  if (!toastVM) {
    initInstance();
  }
  let tpl = toastVM.$mount().$el;
  //必须用原生js将其插入到文档中
  document.body.appendChild(tpl);
  toastVM.tip = msg || '';
  Object.keys(options).forEach(key => {
    toastVM[key] = options[key];
  });
  Vue.nextTick(() => {
    toastVM.isShow = true;
  });
}

export default Toast;
