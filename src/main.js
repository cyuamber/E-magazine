import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Icon, Input } from 'element-ui';
import App from './App.vue'
import router from './router'
import store from './store'
import 'static/base.js'

Vue.use(MintUI);
Vue.use(Input);
Vue.use(Icon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
