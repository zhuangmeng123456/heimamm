import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.config.productionTip = false
vue.use(ElementUI)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
