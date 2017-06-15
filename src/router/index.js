import Vue from 'vue';
import Router from 'vue-router';
import Catswiper from '@/components/Catswiper';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Catswiper,
    },
  ],
});
