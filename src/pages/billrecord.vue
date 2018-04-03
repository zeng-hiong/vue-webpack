<template>
  <div>
    <HeadTop name='注册'  arr=true></HeadTop>
     <div id="sign">
       <img src="../assets/logo@2x.png" alt="" class='logo'>
       <div>
            <div class="inputbox">
              <p>
                <img src="../assets/setusn.png" alt="">
                 <input type="text" id='username' placeholder="请输入手机号">
              </p>
              <p>
                <img src="../assets/setpswd.png" alt="">
                <input type="text" id='password' placeholder="请输入短信验证码">
                <span>短信验证码</span>
              </p>
            </div>
            <button class="signbtn">下一步</button>
        </div>
        <div class="bottom">
            <span>已有账号？<router-link to='/login'>返回登录</router-link></span>
        </div>
     </div>
  </div>
</template>

<script>
import HeadTop from '../components/heade'
export default {
  name: 'Footbtm',
  data () {
    return {
      
    }
  },
  components:{
    HeadTop
  }
}
</script>

<style scoped>
    @import '../assets/css/loginAndsign.css'
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

