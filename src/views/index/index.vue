<template>
  <el-container class="my-container">
    <el-header class="my-header">
      <div class="left">
        <i @click="isCollapse=!isCollapse" class="el-icon-s-fold"></i>
        <img src="../../assets/login_logos.png" alt="" />
        <span>黑马面面</span>
      </div>
      <div class="right">
        <img :src="userIcon" alt="" />
        <span class="name">{{username}},您好</span>
        <el-button type="primary" @click="loginout">退出</el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside width="auto" class="my-aside">
       <el-col :span="14" >
    <el-menu router
     :collapse="isCollapse"
      :default-active="$route.path"
      class="el-menu-vertical-demo">
      <el-menu-item index="/index/chart">
        <i class="el-icon-pie-chart"></i>
        <span slot="title">数据概览</span>
      </el-menu-item>
      <el-menu-item index="/index/user">
        <i class="el-icon-user"></i>
        <span slot="title">用户列表</span>
      </el-menu-item>
      <el-menu-item index="/index/question">
        <i class="el-icon-edit-outline"></i>
        <span slot="title">题库列表</span>
      </el-menu-item>
      <el-menu-item index="/index/enterprise">
        <i class="el-icon-office-building"></i>
        <span slot="title">企业列表</span>
      </el-menu-item>
      <el-menu-item index="/index/subject">
        <i class="el-icon-notebook-2"></i>
        <span slot="title">学科列表</span>
      </el-menu-item>
    </el-menu>
  </el-col>
      </el-aside>
      <el-main class="my-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// 导入接口

import { logout } from '@/api/index.js'
import { romveToken } from '@/utils/token.js'

export default {
  name: 'index',
  data(){
    return {
      // 用户名
      username:"",
      // 用户头像
      userIcon:"",
      isCollapse:false
    }
  },

  methods:{
    loginout(){
       this.$confirm('确认要退出是否继续?', '提示', {
          confirmButtonText: '狠心离开',
          cancelButtonText: '继续留下',
          type: 'success'
        }).then(() => {
          logout().then(res=>{
            window.console.log(res)
            if(res.data.code===200){
              romveToken();
              this.$router.push('/login')
            }
          })
        })
        .catch(() => {})
    }
}
};
// beforeCreate(){

  //   //如果没有值
  //   if(getToken()==undefined){
  //     //提示用户登录
  //     this.$message.success('没有登录，请先登录');
  //     this.$router.push('/login');
  //   }
  // },
  // created() {
  //   info().then(res=>{
      
  //     this.username = res.data.data.username;
  //     // 服务器返回的头像地址不完整，需要进行拼接
  //     this.userIcon =  process.env.VUE_APP_URL+"/"+res.data.data.avatar
  //   })
  // },

</script>

<style lang="less">
.my-container {
  height: 100%;
  .my-header {
    // background: hotpink;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      i {
        font-size: 24px;
        margin-right: 22px;
      }
      img {
        margin-right: 11px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      img {
        width: 43px;
        height: 43px;
        border-radius: 50%;
        margin-right: 9px;
      }
      span.name {
        margin-right: 38px;
        font-size: 14px;
      }
    }
  }
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  // .my-aside {
   
  // }
  .my-main {
    background: #0094ff;
  }
}
</style>