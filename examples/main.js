import Vue from 'vue';
import App from './App.vue';
import HsxUI from '../packages/index';

Vue.config.productionTip = false;
Vue.use(HsxUI);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
