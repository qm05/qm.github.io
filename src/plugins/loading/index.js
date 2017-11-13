import Vue from 'vue';
import Loading from './loading';

let loadingVM = null;

Loading.install = function (Vue) {
  Vue.component(Loading.name, Loading);
}
//创建构造器
const LoadingConstructor = Vue.extend(Loading);

const initInstance = () => {
  //创建实例，并进行挂载
  loadingVM = new LoadingConstructor();
}

Loading.root = function (isShow, msg) {
  if (!loadingVM) {
    initInstance();
  }
  let tpl = loadingVM.$mount().$el;
  //必须用原生js将其插入到文档中
  document.body.appendChild(tpl);
  loadingVM.tip = msg || '';
  loadingVM.isShow = isShow || false;
}

export default Loading;
