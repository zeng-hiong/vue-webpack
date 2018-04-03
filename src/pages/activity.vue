<template>
  <div>
     <HeadTop name='活动列表' arr='false'></HeadTop>
     <section>
         <ul>
           <li v-for='list in lists'>
             <p>{{list.time}}截止</p>
             <div>
                <img :src="list.src" alt="">
                <div class="mask" v-show='list.flag'>
                   <span>/  已结束  /</span>
                </div>
             </div>
           </li>
         </ul>
     </section>
  </div>
</template>

<script>
import HeadTop from '../components/heade'
export default {
  name: 'Activity',
  data () {
    return {
        lists:[{time:'2018-04-01',src:require('../assets/banner.png'),flag:true},
        {time:'2018-04-01',src:require('../assets/banner2.png'),flag:false},
        {time:'2013-02-08',src:require('../assets/banner3.png'),flag:false},
        {time:'2018-04-01',src:require('../assets/banner.png'),flag:true},
        {time:'2016-02-11',src:require('../assets/banner5.png'),flag:false},
        {time:'2018-06-01',src:require('../assets/banner2.png'),flag:true},
        {time:'2011-06-56',src:require('../assets/banner3.png'),flag:false}
        ]
    }
  },
  components:{
    HeadTop
  }
}
</script>

<style scoped>
   section{
    position: absolute;
    left: 0;
    right:0;
    top:0.8rem;
    bottom:0;
    margin:auto;
    overflow:scroll;
    background: #eee;
    font-size: 0.3rem;
   }
   p{
    text-align: right; 
    padding:0.1rem 0.3rem;
    color:#999;
   }
   li{
    margin-bottom:0.2rem;
    background: #fff;
   }
   li>div{
    position: relative;
   }
   .mask span{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    color:#eee;
   }
   img{width: 100%}
   .mask{
    position: absolute;
    left: 0;
    right:0;
    top:0;
    bottom: 0;
    z-index: 2;
    background: rgba(0,0,0,0.5)
   }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

