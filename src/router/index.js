import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/IndexPage';
import Loading from '@/components/LoadingPage';
import Toast from '@/components/ToastPage';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/loading',
      name: 'loading',
      component: Loading
    }, {
      path: '/toast',
      name: 'toast',
      component: Toast
    }

  ]
})
