<template>
  <div id='centerpart'>
     <img src="../assets/homecon.png" alt="">
     <div class="btn"><router-link to='/login'></router-link></div>
      <div class="con" >
         <div class="top">
             <p>平台优势</p>
         </div>
         <div>
            <ul>
               <li v-for='img in imgs'><img :src="img.src" alt=""><span>{{img.list}}</span></li>
            </ul>
            <p class='tip'>网贷有风险，投资需谨慎</p>
         </div>
         <img src="../assets/arrowc.png"  alt="" class='arrow' v-show='scrolled'>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CenterContent',
  props:['scrolled'],
  data () {
    return {
      imgs:[{
        src:require('../assets/platform.png'),list:'银泽通集团旗下理财平台'
      },{
        src:require('../assets/savelo.png'),list:'广东华兴银行资金存管'
      },{
        src:require('../assets/riskconlo.png'),list:'银行级风控体系历史100%兑付'
      },{
        src:require("../assets/warrant.png"),list:'合作机构提供本息担保'
      }],
    }
  }
}
</script>

<style scoped>
   #centerpart{
    position:relative;
   }
   #centerpart>img{
      width:88%;
   }
   .con{
    margin-top: 1rem;
    font-size: 0.25rem;
    background: url(../assets/indexbg.png);
    background-size:100% 100%;
    color:#834e28;
    position: relative;
    padding-bottom: 40px;
   }
   .tip{
    padding:0.4rem 0 0.25rem;
    font-size: 0.18rem;
   }
   .top{
    height:1.3rem;
    padding-top:0.5rem;
    font-size: 0.3rem;
    letter-spacing: 1px;
    font-weight: 500;
   }
   ul{
    width:85%;
    margin:0 auto;
   }
   li{
    text-align: left;
    height: 2rem;
    line-height: 2rem;
    border-bottom:1px solid #834e28;
   }
  li img{
    display: inline-block;
    margin:0 1rem 0 0.5rem;
    width:0.8rem;
    vertical-align: middle
  }
  .arrow{
     position: fixed;
    bottom:1rem;
    right:0;
    left:0;
    margin:auto;
    width:0.3rem;
    height: 0.3rem;
  }
  .btn{
    position:absolute;
    left:0;
    right:0;
    top:4.06rem;
    margin:auto;
    width:70%;
    height:1rem;
  }
  .btn a{
    display: block;
    height: 100%
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

