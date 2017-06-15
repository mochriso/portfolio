import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

// mount with global
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
