<template>
  <div>
      <HeadTop name='登录' arr=true></HeadTop>
      <div id="login">
        <img src="../assets/logo@2x.png" alt="" class='logo'>
        <div>
            <div class="inputbox">
              <p>
                <img src="../assets/setusn.png" alt="">
                 <input type="text" id='username' placeholder="请输入用户名">
              </p>
              <p>
                <img src="../assets/setpswd.png" alt="">
                <input type="text" id='password' placeholder="请输入密码">
                <img src="../assets/eyeopenb.png" alt="">
              </p>
            </div>
            <button class="loginbtn">登录</button>
        </div>
        <p class='forget'>
          <router-link to='/fgtusnm'>忘记用户名</router-link>
          <router-link to='/fgtpswd'>忘记密码</router-link>
        </p>
        <div class="bottom">
            <span>还没有账号？现在去<router-link to='/sign'>免费注册</router-link></span>
        </div>
      </div>
  </div>
</template>

<script>
import HeadTop from '../components/heade'
export default {
  name: 'loginCom',
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

