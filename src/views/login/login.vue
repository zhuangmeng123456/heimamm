<template>
  <div class="login-conantion">
    <div class="left-box">
      <div class="left-top">
        <img src="../../assets/login-logo.png" alt />
        <span class="left-title">黑马面面</span>
        <span class="left-shu"></span>
        <span class="left-name">用户登录</span>
      </div>
      <el-form ref="form" :model="loginform" label-width="43px">
        <el-form-item>
          <el-input placeholder="请输入手机号" v-model="loginform.phone" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入密码" v-model="loginform.passwold" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="17">
            <el-input placeholder="请输入验证码" v-model="loginform.logincode" prefix-icon="el-icon-key" class="logincode"></el-input>
             
          </el-col>
          <el-col :span="7">
           <img class="imglogin" src="../../assets/login-code.png" alt="">
          </el-col>
        
        </el-row>
        
        <el-form-item>
          <el-checkbox v-model="loginform.ischecked">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条例</el-link>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button class="my-btn" type="primary">登录</el-button>
          <el-button class="my-btn" type="primary">注册</el-button>
         
        </el-form-item>
      </el-form>
    </div>
    <img src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginform: {
        phone: "",
        passwold: "",
        ischecked: false,
        logincode: "",
      }
    };
  }
};
</script>

<style lang='less'>
.login-conantion {
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  display: flex;
  align-items: center;
  justify-content: space-around;
 
  .left-box {
    width: 478px;
    height: 550px;
    background-color: #f5f5f5;
      .el-checkbox{
      display: flex;
      align-items: center;
      .el-checkbox__label{
          display: flex;
          
      }
      .el-checkbox__inner{
          display: flex;
      }
  }
     .el-form{
         height: 100%;
          box-sizing:border-box;
     }
    .el-form-item{
      margin-bottom: 0;
  }
    .left-top {
      display: flex;
      align-items: center;
      margin-top: 44px;
      margin-bottom: 27px;
      margin-left: 48px;

      .left-title {
        font-size: 24px;
        margin-right: 14px;
        margin-left: 16px;
        font-weight: 400;
        font-family: SourceHanSansCN;
      }
      .left-name {
        font-size: 22px;
        margin-left: 12px;
        font-weight: 400;
        font-family: PingFangSC;
      }
      .left-shu {
        display: inline-block;
        width: 1px;
        height: 24px;
        background-color: #c9c9c9;
      }
     
    }
     .my-btn{
          display: block;
          width: 394px;
          height: 40px;
          margin-left: 0;
          margin-bottom: 28px;
      }
  
    .imglogin{
    // width: 100%;
      height: 40.8px;
    }
  }
 
  .logincode{
      margin-left: 43px;
  }
  .el-row{
      margin-bottom: 32px;
      width: 394px;
  }
  .el-form-item__content{
     
      width: 394px;
      height: 43px;
      margin-bottom: 26px;
  }

}
</style>