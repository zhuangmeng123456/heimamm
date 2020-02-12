//导入
import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/login.vue'
import index from '../views/index/index.vue'
import chart from '../views/index/chart/chart.vue'
import user from '../views/index/user/user.vue'
import question from '../views/index/question/question.vue'
import enterprise from '../views/index/enterprise/enterprise.vue'
import subject from '../views/index/subject/subject.vue'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
//注册
Vue.use(VueRouter)





//实例化
const router = new VueRouter({
    //路由配置
    routes: [
        {
            path:'/login',
           component:login
        },
        {
            path:'/index',
            component:index,
            children:[
                {
                path:'chart',
                component:chart
                },
                {
                path:'user',
                component:user
                },
                {
                path:'question',
                component:question
                },
                {
                path:'enterprise',
                component:enterprise
                },
                {
                path:'subject',
                component:subject
                },
            ]
        },
    ]
})


router.beforeEach((to,from,next)=>{
    NProgress.start()
    next()
})

router.afterEach(()=>{
    NProgress.done()
})
//暴露出去
export default router;