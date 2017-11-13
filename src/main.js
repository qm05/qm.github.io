// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import qmVue from './plugins/index'
// 单个引入的方式
//import Toast from './plugins/toast/index'
// import Loading from './plugins/loading/index'

Vue.use(qmVue);
// Vue.use(Toast);
// Vue.use(Loading);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
