<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style>
div,ul,li,p,section,footer,header,table,ol,thead,tbody,tr,html,body,h1,h2,h3,h4,h5,a,input,span{
  margin:0;
  padding:0;
  box-sizing: border-box;
  -webkit-box-sizing:border-box;
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  -webkit-tap-highlight-color:transparent;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding:0.8rem 0;
  width:100%;
  height: 100%;
  position: relative;
}
ul{
  list-style: none;
}
a{
  text-decoration: none;
  display: inline-block;
  color:#666;
}
input,button,textarea{
  border:none;
  outline: none;
}
 html,body{
  width:100%;
  height: 100%;
}
</style>
