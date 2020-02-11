//声明一个变量 
const TOKENKEY = 'heimammToken'

// 设置 token
export function setToken (token){
    window.localStorage.setToken(TOKENKEY,token);
}
// 获取token
 export function getToken(){
     return   window.localStorage.getToken(TOKENKEY);
 }


// 删除
export function romveToken(){
    window.localStorage.romveToken(TOKENKEY);
}