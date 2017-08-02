import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import Home from '@/components/Home';
import Project from '@/components/Project';


// import Mainnav from '@/components/Mainnav';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    // {
    //   path: '/:navitem',
    //   name: 'mainnav',
    //   component: Mainnav,
    // },
    // {
    //   path: '/:projectItem',
    //   name: 'Project',
    //   component: Project,
    // },
  ],
});
