<template>
  <div id='tabcon'>
    <transition name='slide'>
      <router-view></router-view>
    </transition>
   <foot></foot>
  </div>
</template>
<script>
import Foot from './foote'
export default {
  name: 'home',
  components:{
     Foot
  },
  data () {
    return {
      
    }
  }
}
</script>
<style scoped>
  
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

