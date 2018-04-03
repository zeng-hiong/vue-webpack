<template>
  <div id='find'>
   <Head name='发现' arr='false'></Head>
   <div class="part choose">
       <ul>
         <li v-for='list in lists'>
            <router-link :to='list.path'>
            <img :src="list.src" :alt="list.part" /><br />
            {{list.part}}</router-link>
         </li>
       </ul>
   </div>
   <div class="part actpart">
      <ul>
        <li>
           <img src="../assets/img1.png" alt="">
           <p>新手特权</p>
           <p>280元红包+5888体验金</p>
         </li>
         <span class='line'></span>
         <li>
           <img src="../assets/invist.png" alt="">
           <p>邀请好友</p>
           <p>马上邀请好友赚佣金</p>
         </li>
      </ul>
   </div>
   <div class="part vip">
      <img src="../assets/discovery_banner.png" alt="">
   </div>
   <div class="part actlist">
      <p class='title'><span></span>精彩活动·等您体验<span></span></p>
       <ul>
          <li><img src="../assets/banner2.png"  width="186" alt=""></li>
          <li><img src="../assets/banner3.png"  width="186" alt=""></li>
          <li><img src="../assets/banner3.png"  width="186" alt=""></li>
          <li><img src="../assets/banner2.png"  width="186" alt=""></li>
       </ul>
       <p><router-link to='/activity'>更多活动>></router-link></p>
   </div>
  </div>
</template>

<script>
import Head from '../components/heade'
export default {
  name: 'find',
  components:{
    Head
  },
  data () {
    return {
      lists:[{src:require('../assets/compmes.png'),part:'公司动态',path:'/news'},{
        src:require('../assets/secty.png'),part:'安全保障',path:'/security'
      },{src:require('../assets/datalo.png'),part:'数据披露',path:'/operatedata'},{src:require('../assets/aboutus.png'),part:'关于我们',path:'/aboutus'}]
    }
  }
}
</script>
<style scoped>
   #find{
    font-size: 0.2rem;
    background: #ddd;
   }
   div{
    background: #fff;
   }
   .choose ul{
     display: flex;
     justify-content: space-between;
   }
   .choose img{
    width:0.75rem;
   }
   .choose ul li{
    flex:1;
    padding:0.2rem 0;
   }
   .choose p{
    margin:0.1rem 0;
    color:#838383;
   }
   .actpart ul{
    display: flex;
    justify-content: space-around;
    padding:0.2rem 0;
    align-items: center;
   }
   .actpart li{
    flex:2;
   }
   .line{
    border-left:1px dashed #e4e4e4;
    height: 1.3rem;
   }
   .actpart img{
    width:1.77rem;
    height:1.7rem;
   }
   .actpart p:first-of-type{
    font-size:0.2rem;
    color:#333;
   }
   .actpart p:last-of-type{
    font-size: 0.18rem;
    color:#838383;
   }
   .part{
    margin-bottom: 0.26rem
   }
   .vip{
    font-size: 0;
   }
   .vip img{
    width:100%;
   }
   .actlist ul{
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    flex-wrap: wrap;
    font-size: 0;
   }
   .actlist li{
    width:45%;
    margin-bottom: 0.25rem;
   }
   .actlist li img{
    width:100%;
   }
   .actlist .title{
    font-size: 0.2rem;
    color:#333;
    padding:0.3rem 0;
   }
   .title span{
    display: inline-block;
    width:.5rem;
    height: 1px;
    margin:0 0.1rem;
    background: #666;
    vertical-align: middle; 
   }
   .actlist p{
    padding:0.2rem 0;
   }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

