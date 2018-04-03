<template>
  <div id='home' @touchend='scrollend'>
    <Scroll :imgs='imgslist'></Scroll>
    <CenterCon :scrolled="arrow"></CenterCon>
  </div>
</template>

<script>
import Scroll from '../components/scroll'
import CenterCon from '../components/centercontainer'
export default {
  name: 'home',
  components:{
    Scroll,CenterCon
  },
  data () {  
    return {
      arrow:true,
      startX:0,
      startY:0,
      endX:0,
      endY:0,
      imgslist:[{src:require('../assets/banner.png')},{
        src:require('../assets/banner2.png')
      },{src:require('../assets/banner3.png')},{src:require('../assets/banner5.png')}]
    }
  },
  methods:{
    scrollend(){
      var wint=window.scrollY
      console.log('scrollY'+wint)
      if(wint>=3){
        this.arrow=false;
      }else{
        this.arrow=true
      }
    },
    touchstart(e){
      this.startY=e.changedTouches[0].pageY
      console.log(e)
    },
    touchend(e){
      this.endY=e.changedTouches[0].pageY;
      console.log(this.endY+'STARY'+this.startY);
      let dis=this.endY-this.startY;
      if(dis>=100){
        console.log('ehlkl')
      }
    }
  }
}
</script>
<style scoped>
   
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

