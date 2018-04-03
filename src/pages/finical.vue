<template>
  <div id='finical'>
    <div class="tophead">
       <ul>
         <li><span class='zhitou'>直投标</span></li>
         <li><span>体验标</span><img src="../assets/caltor.png" alt=""></li>
       </ul>
       <ul>
         <li><span>默认</span></li>
         <li><span>利率</span><img src="../assets/arrowa.png" height="24" width="11" alt=""></li>
         <li><span>金额</span><img src="../assets/arrowb.png" height="24" width="11" alt=""></li>
       </ul>
    </div>
    <div class="list">
     <h4>理财<span>1707-1-906</span></h4>
     <ul>
       <li><span class='rate'>9.0%</span><br><span>年利率</span></li>
       <li><span>1个月</span><br><span>借款期限</span></li>
       <li><span>已还款</span><br><span>标的状态</span></li>
     </ul>
        <div class='progress'>
         <span class='progressbar'></span>
     </div>
     <span class='percent'>99.0%</span>
    </div>
    <div class="list">
     <h4>理财<span>1707-1-906</span></h4>
     <ul>
       <li><span class='rate'>9.0%</span><br><span>年利率</span></li>
       <li><span>1个月</span><br><span>借款期限</span></li>
       <li><span>已还款</span><br><span>标的状态</span></li>
     </ul>
        <div class='progress'>
         <span class='progressbar'></span>
     </div>
     <span class='percent'>99.0%</span>
    </div> 
    <div class="list">
       <h4>理财<span>1707-1-906</span></h4>
       <ul>
         <li><span class='rate'>9.0%</span><br><span>年利率</span></li>
         <li><span>1个月</span><br><span>借款期限</span></li>
         <li><span>已还款</span><br><span>标的状态</span></li>
       </ul>
          <div class='progress'>
           <span class='progressbar'></span>
       </div>
       <span class='percent'>96.0%</span>
    </div>
    <div class="list">
       <h4>理财<span>1707-1-906</span></h4>
       <ul>
         <li><span class='rate'>9.0%</span><br><span>年利率</span></li>
         <li><span>1个月</span><br><span>借款期限</span></li>
         <li><span>已还款</span><br><span>标的状态</span></li>
       </ul>
          <div class='progress'>
           <span class='progressbar'></span>
       </div>
       <span class='percent'>92.0%</span>
    </div>
    <div class="list">
       <h4>理财<span>1707-1-906</span></h4>
       <ul>
         <li><span class='rate'>9.0%</span><br><span>年利率</span></li>
         <li><span>1个月</span><br><span>借款期限</span></li>
         <li><span>已还款</span><br><span>标的状态</span></li>
       </ul>
          <div class='progress'>
           <span class='progressbar'></span>
       </div>
       <span class='percent'>90.0%</span>
    </div>
    <div class="list">
       <h4>理财<span>1707-1-906</span></h4>
       <ul>
         <li><span class='rate'>9.0%</span><br><span>年利率</span></li>
         <li><span>1个月</span><br><span>借款期限</span></li>
         <li><span>已还款</span><br><span>标的状态</span></li>
       </ul>
          <div class='progress'>
           <span class='progressbar'></span>
       </div>
       <span class='percent'>45.0%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components:{
    
  },
  data () {
    return {
      
    }
  }
}
</script>
<style scoped>
   #finical{
    font-size: 0.2rem;
    background: #e4e4e4;
    overflow: hidden;
    margin-bottom: .8rem
   }
   .tophead{
    position: fixed;
    top:0;
    width:100%;
    border-bottom: 1px solid #e4e4e4;
    background: #fff;
    z-index: 9
   }
   .tophead ul:first-child{
    font-size: 0.28rem;
   }
    ul{
    display: flex;
   }
   .tophead ul:first-child span{
    border-bottom:1px solid #D0B57C;
    padding-bottom:0.15rem;
    display: inline-block;
   }
   .tophead .zhitou:after{
    content:'';
    display: block;
    width:1px;
    height: 0.4rem;
    background: #ddd;
    position: absolute;
    right:0;
    top:50%;
    transform:translateY(-0.1rem);
   }
    li{
    flex:1;
    text-align: center;
    position: relative;
    padding-top:0.15rem;
   }
   .tophead ul:first-child img{
    width:0.33rem;
    float: right;
    margin-right: 0.2rem;
    vertical-align: middle;
   }
  .tophead ul:last-child li{
    height: 0.4rem;
    line-height: 0.4rem;
    padding:0;
   } 
   .tophead ul:last-child img{
    width:0.11rem;
    height: 0.24rem;
    vertical-align: middle;
   }
   .list:nth-of-type(2){
    margin-top: 0.56rem
   }
   .list{
    padding:0.1rem;
    background: #fff;
    margin-bottom: 0.24rem;
   }
   .list h4{
    text-align: left;
    border-bottom: 1px solid #e4e4e4;
    font-size: 0.28rem;
    font-weight: 400;
    padding:0.08rem;
    padding-left:.12rem;
    position: relative;
   }
   .list h4:after{
    display: block;
    content: '';
    width:2px;
    height: 60%;
    position: absolute;
    top:50%;
    background: #D0B57C;
    left: 0;
    transform: translateY(-50%);
   }
   .list li span:first-child{
    font-size: 0.28rem;
   }
   .list .rate{
    color:#f21f1f;
   }
   .list li {
    line-height: 1.8em
   }
   .list li:first-child{
    text-align: left;
   }
   .list li:last-child{
    text-align: right;
   }
   .progress{
    width:85%;
    height:0.025rem;
    background: #e4e4e4;
    font-size: 0;
    display: inline-block;
    vertical-align: middle;
   }
   .progressbar{
    font-size: 0.2rem;
    display:block;
    width:50%;
    height: 100%;
    background: #D0B57C;
   }
   .percent{
    vertical-align: middle;
    color: #D0B57C
   }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

