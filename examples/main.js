import Vue from 'vue';
import App from './App.vue';
import HBlog from '../packages/index';

Vue.config.productionTip = false;
Vue.use(HBlog);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
