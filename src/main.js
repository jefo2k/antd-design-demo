import Vue from 'vue'
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Button);

new Vue({
  render: h => h(App),
}).$mount('#app')
