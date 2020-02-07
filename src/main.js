import Vue from 'vue'
import App from './App.vue'
//导入路由配置
import router from './router/index'
//导入element 包
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//导入全局样式
import './style/bace.css'



Vue.config.productionTip = false
//注册
Vue.use(ElementUI)


//实例化
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
