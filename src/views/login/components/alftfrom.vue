<template>
  <el-dialog
    class="alftfrom-dialog"
    center
    width="603px"
    title="用户注册"
    :visible.sync="dialogFormVisible"
  >
    <el-form :model="form" :rules="rules" ref="alftfrom">
      <!-- 头像模块 -->
      <el-form-item label="头像" prop="avatar"  class="one">
        <el-upload 
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          name="image"
        >
          <!-- imageUrl有值，显示图片 -->
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <!-- imageUrl没有值 显示的是i标签 -->
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="昵称" :label-width="formLabelWidth" prop="username">
        <el-input v-model="form.username" autocomplete="off"></el-input>
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
      <el-form-item label="图形码" :label-width="formLabelWidth" prop="code">
        <el-row>
          <el-col :span="16">
            <el-input v-model="form.code" autocomplete="off"></el-input>
          </el-col>
          <el-col :span="7" :offset="1" class="register-box">
            <img @click="coderodm" class="register-code" :src="codeURL" alt />
          </el-col>
        </el-row>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item label="验证码" :label-width="formLabelWidth" prop="rcode">
        <el-row>
          <el-col :span="16">
            <el-input v-model="form.rcode" autocomplete="off"></el-input>
          </el-col>
          <el-col :span="7" :offset="1">
            <el-button @click="getSMS">
              {{ delay == 0 ? '点击获取验证码' : `还有${delay}秒继续获取` }}

            </el-button>
           
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <!-- 点击框 -->
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancel('alftfrom')">取 消</el-button>
      <el-button type="primary" @click="submitForm('alftfrom')">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
//import {sendsms } from '.../../../src/api/register.js'

//使用@代替。。/进行导入
import { sendsms, register } from "@/api/register.js";

//导入邮箱和手机号的抽离
import { checkemail , checkphone} from "@/utils/validator.js"

export default {
  data() {
    return {
      //是否显示对话框
      dialogFormVisible: false,
      //表单属性
      form: {
        //昵称
        usename: "",
        //密码
        password: "",
        //邮件
        email: "",
        //手机号
        phone: "",
        //验证码
        code: "",
        avatar: "",
        rcode: ""
      },
      //文本宽度
      formLabelWidth: "62px",
      // 倒计时时间
      delay: 0,
      // 本地图片预览地址
      imageUrl: "",
      //验证码接收的地址
      codeURL: process.env.VUE_APP_URL + "/captcha?type=sendsms",
      //头像接收的地址
      uploadUrl: process.env.VUE_APP_URL + "/uploads",
      rules: {
        avatar: [
          { required: true, message: "头像不能为空", trigger: "change" }
        ],
        username: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 6, max: 12, message: "昵称的长度6-12位", trigger: "change" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "密码的长度6-12位", trigger: "change" }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { validator: checkemail, trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: checkphone, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //关闭表单
      cancel(formName) {
      window.console.log(formName)
      // 关闭表单
      this.dialogFormVisible = false;
      // this.$refs[formName].resetFields();
      // 人为的清空
      // this.imageUrl = '';
    },
    //表单验证
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message.success("验证成功");
        } else {
          this.$message.error("验证失败");
          return false;
        }
      });
      register({
        username: this.form.username,
        //密码
        password: this.form.password,
        //邮件
        email: this.form.email,
        //手机号
        phone: this.form.phone,
        avatar: this.form.avatar,
        rcode: this.form.rcode
      }).then(res => {
        if (res.data.code === 200) {
          this.$message.success("恭喜你注册成功");
          this.dialogFormVisible = false;
        } else if (res.data.code === 201) {
          this.$message.error(res.data.message);
        }
      });
    },
    coderodm() {
      //时间蹉
      this.codeURL =
        process.env.VUE_APP_URL + "/captcha?type=sendsms&" + Date.now();

      //随机数生成
      // this.codeURL=process.env.VUE_APP_URL+'/captcha?type=sendsms&'+Math.random(),
      //正规写法
      //this.codeURL=process.env.VUE_APP_URL+'/captcha?type=sendsms&t='+ Date.now(),
    },
    // 上传成功
    handleAvatarSuccess(res, file) {
      // window.console.log(res);

      // URL.createObjectURL 生成的是本地的临时路径，刷新就没用了
      this.imageUrl = URL.createObjectURL(file.raw);
      this.form.avatar = res.data.file_path;
      //表单的头像检验
      this.$refs.alftfrom.validateField('avatar');
    },
    // 上传之前
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || "image/png" || "image/gif" || 'image/jpg' ;
      // 1024*1024 1mb
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("只能上传图片模式");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    getSMS() {
      const req = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
      if (req.test(this.form.phone == true)) {
        return this.$message.success("手机号格式不对");
      }
      if (this.form.code.length != 4) {
        return this.$message.error("验证码错误");
      }

      // 如果为0开启倒计时
      if (this.delay == 0) {
        this.delay = 60;
        const interId = setInterval(() => {
          // 时间的递减
          this.delay--;
          if (this.delay == 0) {
            // 清除定时器
            clearInterval(interId);
          }
        }, 100);
   
        sendsms({
          code: this.form.code,
          phone: this.form.phone
        }).then(res => {
          // window.console.log(res)
          if (res.data.code === 200) {
            this.$message.success("验证码获取成功:" + res.data.data.captcha);
          } else if (res.data.code === 0) {
            this.$message.error(res.data.message);
          }
        });
      }
    }
  }
};
</script>

<style lang='less'>
.alftfrom-dialog {
  .one {
    margin-bottom: 120px;
  }
  .el-dialog__header {
    background: linear-gradient(to right, #0dbfef, #1792f8);
  }
  .el-dialog__title {
    color: white;
  }
  .register-box {
    height: 40.8px;
  }
  .register-code {
    height: 40.8px;
    width: 100%;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader {
    text-align: center;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>