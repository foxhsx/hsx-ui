import Vue from 'vue';
import App from './App.vue';
import Button from './components/button.vue';
import Dialog from './components/dialog.vue';
import Input from './components/input.vue';
import Switch from './components/switch.vue';
import Radio from './components/radio.vue';
import RadioGroup from './components/radio-group.vue';
import Checkbox from './components/checkbox.vue';
import './assets/fonts/fonts.css';

Vue.config.productionTip = false;
Vue.component(Button.name, Button);
Vue.component(Dialog.name, Dialog);
Vue.component(Input.name, Input);
Vue.component(Switch.name, Switch);
Vue.component(Radio.name, Radio);
Vue.component(RadioGroup.name, RadioGroup);
Vue.component(Checkbox.name, Checkbox);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
