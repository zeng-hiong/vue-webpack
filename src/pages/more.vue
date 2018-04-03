<template>
  <div>
    <HeadTop name='更多'  arr=false></HeadTop>
     <div id="more">
         <ul>
             <router-link :to='list.path' v-for='list in lists' tag='li'>
              <img :src="list.src" alt="">
              {{list.content}}
              <img src="../assets/arrow.png" alt="">
             </router-link>
      
         </ul>
     </div>
  </div>
</template>

<script>
import HeadTop from '../components/heade'
export default {
  name: 'More',
  data () {
    return {
       lists:[{
         content:'客服电话',path:'/kefu',src:require('../assets/banklo.png')
       },{content:'关于我们',path:'/aboutus',src:require('../assets/billlist.png')}
       ]
    }
  },
  components:{
    HeadTop
  }
}
</script>

<style scoped>
    #more{
      font-size: 0.3rem;
      background: #eee
    }
    ul{
      text-align: left;
      padding: 0 0.3rem;
      font-size: 0.22rem;
      color: #787878;
      background: #fff;
    }
    li{
      height: .86rem;
      line-height: .86rem;
      border-bottom: 1px solid #e4e4e4;
      position: relative;
    }
    a{width:100%;}
    img{
      width: 0.4rem;
      vertical-align: middle;
    }
    img:first-child{
      margin-right: 0.1rem
    }
    li:last-child{
      border-bottom: none;
    }
    li img:last-child{
      position: absolute;
      top:50%;
      transform: translateY(-50%);
      right: 0.1rem;
      width:0.15rem;
   }

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

