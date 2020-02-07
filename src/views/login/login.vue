<template>
  <div class='login-conantion'>
      <div class="left-box">
          <div class="left-top">
              <img src="../../assets/login-logo.png" alt="">
              <div class="left-title">黑马面面</div>
              <div class="left-shu"></div>
              <div class="left-name">用户登录</div>
          </div>

      </div>
      <img src="../../assets/login_banner_ele.png" alt="">
  </div>
</template>

<script>
export default {
    name:'login'
}
</script>

<style lang='less'>
.login-conantion {
    height:100%;
    background:linear-gradient(225deg,rgba(20,147,250,1),rgba(1,198,250,1));
    display: flex;
    align-items: center;
    justify-content: space-around;
     .left-box {
    width: 478px;
    height: 550px;
    background-color: #f5f5f5;
    padding-left: 48px;
    .left-top{
        display: flex;
       align-items: center;
       margin-top: 44px;
      
        .left-title{
            font-size: 24px;
            margin-right: 14px;
            margin-left:16px ;
            font-weight:400;           
            font-family:SourceHanSansCN;
        }
        .left-name{
            font-size: 22px;
            margin-left: 12px;
             font-weight:400;
             font-family:PingFangSC;
        }
        .left-shu{
            display: inline-block;
            width: 1px;
            height: 24px;
            background-color: #c9c9c9;
        }
        
    }
}
}



</style>