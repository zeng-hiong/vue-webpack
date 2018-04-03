<template>
  <div class="footer">
      <ul>
      <li>
        <router-link to='/' exact>
          <img src="../assets/homeact.png" alt="">
          <p>首页</p>
        </router-link>
      </li>
      <li>
        <router-link to='/finical'>
           <img src="../assets/fincial.png" alt="">
           <p>理财</p>
        </router-link>
      </li>
      <li>
        <router-link to='/my'>
          <img src="../assets/my.png" alt="">
          <p>我的</p>
        </router-link>
      </li>
      <li>
        <router-link to='/find'>
          <img src="../assets/find.png" alt="">
          <p>发现</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Footbtm',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
   .footer{
    position:fixed;
    bottom:0;
    width:100%;
    height: 0.8rem;
    border-top: 1px solid #ddd;
    background: #fff;
   }
   ul{
    display: flex;
    display: -webkit-flex;
    justify-content:center;
    width:100%;
   }
   li{
    flex: 1 1 0%;
    text-align: center;
    font-size: 0.24rem;
    color:#d0b582;
   }
  p{
    color: #787878;
    font-size: 0.24rem;
  }
  a{
    width:100%;
  }
  img{
    width: .4rem;
    height: .4rem;
  }
  .router-link-active p{
    color:#D0B57C;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

