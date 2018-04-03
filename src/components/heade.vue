<template>
  <div class="header">
     <h3><img src="../assets/backar.png" alt="" v-show='arr' @click='back'><span>{{name}}</span></h3>
  </div>
</template>
<script>
export default {
  name: 'TopHead',
  props:['name','arr'],
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    position: absolute;
    top:0;
    right: 0;
    width: 100%;
    height: 0.8rem;
    background-color:#D0B57C;
    line-height:0.8rem;
  }
  .header img{
    position: absolute;
    left:0.2rem;
    top:0;
    bottom:0;
    margin:auto;
    width:0.4rem;
    height: 0.25rem;
  }
  .header h3{
    text-align: center;
    font-size: 0.34rem;
    font-weight: 500;
    letter-spacing:0.06rem;
    color:#fff;
  }
</style>
