import Toast from './toast';
import Loading from './loading';

const components = [
  Toast,
  Loading
];

const install = function (Vue, opts = {}) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
  Vue.prototype.$qmToast = Toast.root;
  Vue.prototype.$qmLoading = Loading.root;
};

export default {
  install,
  Toast,
  Loading
}
