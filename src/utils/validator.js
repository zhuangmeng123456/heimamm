//手机号验证函数

export  const checkphone = (rule, value, callback) => {
  const req = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
  if (req.test(value) == true) {
    callback();
  } else {
    callback(new Error("手机号错误"));
  }
};
//邮箱验证的抽离
export const checkemail = (rule, value, callback) => {
    const req = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (req.test(value) == true) {
      callback();
    } else {
      callback(new Error("邮箱地址错了检查一下"));
    }
  };