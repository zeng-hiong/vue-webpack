<template>
  <div>
    <HeadTop name='推荐好友'  arr=false></HeadTop>
     <div id="invitefriend">
         <div>
             <img src="../assets/newHome-app0.png" height="80" width="80" alt="">
         </div>
         <div>
           <h4><img src="../assets/myaward.png" height="19" width="19" style="vertical-align:middle" alt="">推广简介</h4>
            <p>
              会员通过把自己的推广链接或二维放在自己的空间、网站、朋友圈等地方进行推广，由此进入的新会员投资后您可获得相应的返现红包、现金奖励、佣金提成等福利！
            </p>
         </div>
         <ul>
            <li v-for='list in lists'>
              <router-link :to='list.path'>
                    <img :src="list.src" alt="">
                    {{list.content}}
                    <img src="../assets/arrow.png" alt="">
              </router-link>
            </li>
         </ul>
     </div>
  </div>
</template>

<script>
import HeadTop from '../components/heade'
export default {
  name: 'Invite',
  data () {
    return {
        lists:[{
         content:'我推广的会员',path:'/',src:require('../assets/banklo.png')
       },{content:'我的推广收入',path:'/',src:require('../assets/billlist.png')}
       ]
    }
  },
  components:{
    HeadTop
  }
}
</script>

<style scoped>
   #invitefriend{
      font-size: 0.3rem;
    }
    #invitefriend div:first-child{
      border:1px solid #d0b582;
      margin:0.5rem auto;
      height:2rem;
      width:2rem;
      padding:0.2rem;
    }
     #invitefriend div:first-child img{
      width: 100%;
     }
     #invitefriend div:last-of-type p{
      padding:0.2rem 0.3rem;
     }
    ul{
      text-align: left;
      padding: 0 0.3rem;
      font-size: 0.22rem;
      color: #787878;
      background: #fff;
      border-top: 1px solid #eee;
      margin-top: 0.2rem;
    }
    li{
      height: .86rem;
      line-height: .86rem;
      border-bottom: 1px solid #e4e4e4;
      position: relative;
    }
    a{width:100%;}
    li img{
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
   h4{
    margin-bottom: 0.2rem
   }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

