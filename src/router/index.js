//导入
import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/login.vue'
//注册
Vue.use(VueRouter)
//实例化
const router = new VueRouter({
    //路由配置
    routes: [
        {
            path:'/login',
           component:login
        }
    ]
})
//暴露出去
export default router;