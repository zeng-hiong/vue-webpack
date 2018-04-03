<template>
  <div id='forgetpassword'>
  	<HeadTop name='忘记密码' arr=true></HeadTop>
      <div>
            <div class="inputbox">
              <p>
                <img src="../assets/inphone.png" alt="">
                 <input type="text" id='phonenumber' placeholder="请输入绑定的手机号">
              </p>
              <p>
                <img src="../assets/meslo.png" alt="">
                <input type="text" id='password' placeholder="请输入短信验证码">
                <span>获取验证码</span>
              </p>
              <p>
                <img src="../assets/setpswd.png" alt="">
                <input type="text" id='password' placeholder="请输入新的登录密码">
                <img src="../assets/eyeopena.png" height="34" width="34" alt="">
              </p>
              <p>
                <img src="../assets/setpswd.png" alt="">
                <input type="text" id='password' placeholder="请确认新的登录密码">
                <img src="../assets/eyeclose.png" height="34" width="34" alt="">
              </p>
            </div>
            <button class="signbtn">下一步</button>
        </div>
  </div>
</template>

<script>
import HeadTop from './heade'
export default {
  name: 'Forgetpswd',
  components:{
  	HeadTop
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
    @import '../assets/css/loginAndsign.css'
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

