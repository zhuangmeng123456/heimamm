<template>
  <el-dialog class="alftfrom-dialog" center width="603px" title="用户注册" :visible.sync="dialogFormVisible">

    <el-form :model="form" :rules="rules" ref="alftfrom">
      <el-form-item label="昵称" :label-width="formLabelWidth" prop="usename">
        <el-input v-model="form.usename" autocomplete="off"></el-input>
      </el-form-item>
    
      <el-form-item label="邮箱" prop="email" :label-width="formLabelWidth">
        <el-input v-model="form.email" autocomplete="off"></el-input>
      </el-form-item>
   
      <el-form-item label="手机" prop="phone" :label-width="formLabelWidth">
        <el-input v-model="form.phone" autocomplete="off"></el-input>
      </el-form-item>
 
      <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
        <el-input show-password v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>
      
  <!-- 图形码 -->
      <el-form-item label="图形码" :label-width="formLabelWidth">
          <el-row>
              <el-col :span="16">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-col>
              <el-col :span="7" :offset="1" class="register-box">
                  <img class="register-code" src="../../../assets/login-code.png" alt="">
              </el-col>
          </el-row>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item label="验证码" :label-width="formLabelWidth">
          <el-row>
              <el-col :span="16">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-col>
              <el-col :span="7" :offset="1">
                 <el-button>点击获取验证码</el-button>
              </el-col>
          </el-row>
      </el-form-item>
    </el-form>
    <!-- 点击框 -->
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
//邮箱验证函数
 const checkemail = (rule,value,callback)=>{
            const req = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
            if(req.test(value)==true){
                callback()
            }else{
                callback(new Error('邮箱地址错了检查一下'))
            }
        }
        //手机号验证函数
 const checkphone = (rule,value,callback)=>{
            const req = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
            if(req.test(value)==true){
                callback()
            }else{
                callback(new Error('手机号错误'))
            }
        }
export default {
  data() {
    return {
    //是否显示对话框
      dialogFormVisible: false,
      //表单属性
      form: {
        usename: "",
        password:'',
        email:'',
        phone:''
      },
      //文本宽度
      formLabelWidth: "62px",
      rules:{
         usename:[
            { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 6, max: 12, message: "昵称的长度6-12位", trigger: "change" }
         ],
         password:[
            { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "密码的长度6-12位", trigger: "change" }
         ],
         email:[
           { required: true, message: "请输入邮箱", trigger: "blur" },
           { validator: checkemail, trigger: "blur" }
         ],
        phone:[
           { required: true, message: "请输入手机号", trigger: "blur" },
           { validator:checkphone, trigger: "blur" }
         ]

      }
       

        
      
      
    };
  }
};
</script>

<style lang='less'>
.alftfrom-dialog {
  .el-dialog__header {
    background: linear-gradient(to right, #0dbfef, #1792f8);
  }
  .el-dialog__title {
    color: white;
  }
  .register-box{
    height: 40.8px;
  }
  .register-code{
    height: 40.8px;
    width: 100%;
  }
}
</style>