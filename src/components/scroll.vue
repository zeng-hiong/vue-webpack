<template>
  <div id='scroll'>
       <div class="swiper-container" >
         <div class="swiper-wrapper">
           <div class="swiper-slide"  v-for="img in imgs">
              <img :src='img.src' alt="">
           </div>
         </div>
         <div class="swiper-pagination"></div>
       </div>
  </div>
</template>
<script>
import jquery from '../../static/js/jquery-2.0.0.min.js'
import swiperjs from '../../static/js/swiper.3.1.7.jquery.min.js'
export default {
  name: 'Scroll',
  data () {
    return {
       
    }
  },
  props:['imgs'],
  mounted(){
     var mySwiper=new Swiper('.swiper-container',{
       direction:'horizontal',
       autoplay:5000,
       loop:true,
       autoplayDisableOnInteraction:false,
       pagination:'.swiper-pagination'
     })
  }
}
</script>
<style src='../../static/css/swiper.min.css' >
</style> 
<style scoped>
#scroll{
  margin-top:-.8rem;
}
.swiper-container{
  width:100%;
}
  .swiper-slide .swiper-pagination-bullet{
    background:red;
  }
  .swiper-pagination-bullet{
    background: #257;
  }
 .swiper-pagination .swiper-pagination-bullet-active{
    background:#fff;
  }
  img{
    width:100%;
    height: 100%;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

