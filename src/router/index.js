//导入
import Vue from 'vue'
import VueRouter from 'vue-router'
//登录页面
import login from '../views/login/login.vue'
//主页面
import index from '../views/index/index.vue'

//主页面中的所有分页
import chart from '../views/index/chart/chart.vue'
import user from '../views/index/user/user.vue'
import question from '../views/index/question/question.vue'
import enterprise from '../views/index/enterprise/enterprise.vue'
import subject from '../views/index/subject/subject.vue'


// 按需导入 Element-ui的弹框
import { Message } from 'element-ui';


// 导入token的工具函数 获取token
import { getToken, romveToken } from '@/utils/token.js';

// 导入 用户信息获取接口
import { info } from '@/api/index.js';


//进度条

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
//注册
Vue.use(VueRouter)





//实例化
const router = new VueRouter({
    //路由配置
    routes: [
        {
            path: '/login',
            component: login
        },
        {
            path: '/index',
            component: index,
            children: [
                {
                    path: 'chart',
                    component: chart
                },
                {
                    path: 'user',
                    component: user
                },
                {
                    path: 'question',
                    component: question
                },
                {
                    path: 'enterprise',
                    component: enterprise
                },
                {
                    path: 'subject',
                    component: subject
                },
            ]
        },
    ]
})
//定义白名单
const whitepaths = ['/login']

//进度条 进入之前的进度条开启  to从哪里开始  from去哪里  next 这是一个必不能少的 过去
//导航守卫
router.beforeEach((to, from, next) => {
    NProgress.start();
    // 白名单判断 不存在 转小写
    if (whitepaths.includes(to.path.toLocaleLowerCase() != true)) {
        // 需要判断登录状态
        // token非空
        if (getToken() == undefined) {
            //提示错误信息 并返回登录页面
            Message.warning('登录状态有误，请检查');
            next('/login');
        } else {
            info().then(res => {
                if (res.data.code === 206) {
                    // 提示用户
                    Message.warning('登录状态有误，请检查');
                    romveToken();
                    next('/login')

                } else if (res.data.code === 200) {
                    //判断是不是返回对的token
                    //是就放走
                    next()
                }
            })

        }
    } else {
        //登录页面
        next()
    }

})
// 进度条的 关闭  也有to 和from值 大多时候不用写
router.afterEach(() => {
    NProgress.done()
})

//暴露出去
export default router;