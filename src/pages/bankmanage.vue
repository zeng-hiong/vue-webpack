<template>
  <div>
    <HeadTop name='我的银行卡'  arr=false></HeadTop>
     <div id="mybank">
         <p>{{bankname}}</p>
          <div class='bankbox'>
               <p>
                 <span><img :src="imgs.bankimg" alt="">{{bankaccount}}</span>
                 <span><img :src="imgs.banklogo" alt="">{{bankname}}</span>
               </p>
               <h3>李木木</h3>
               <p>{{imgs.banknumber}}</p>
          </div>
          <button class='btn'>绑定银行卡</button>
     </div>
  </div>
</template>

<script>
import HeadTop from '../components/heade'
export default {
  name: 'Footbtm',
  data () {
    return {
        bankaccount:'E账户',
        bankname:'广东华兴银行',
        imgs:{bankimg:require('../assets/fincial.png'),
        banklogo:require('../assets/billdetail.png'),banknumber:'2345354657656767'}
        
    }
  },
  components:{
    HeadTop
  }
}
</script>

<style scoped>
   #mybank{
      font-size: 0.24rem;
      text-align: left;
   }
   #mybank>p{
    padding:0.15rem 7%;
    font-size: 0.38rem
   }
   .bankbox{
    margin:0 auto;
    border-radius: 0.2rem;
    background: #ade;
    padding:0.3rem ;
    color:#fff;
    font-size: 0.32rem;
    width:92%;
   }
   .bankbox img{
    width:0.4rem;
    vertical-align: middle;
    margin-right: 0.15rem;
   }
   .bankbox span:last-of-type{
    float:right;
   }
   .bankbox h3{
    margin:0.2rem 0;
   }
   .btn{
      display: block;
      margin:0 auto;
      line-height: 0.6rem;
      margin:0 auto;
      background: #D0B57C;
      font-size: 0.34rem;
      color:#fff;
      margin-top: 0.4rem;
      border-radius: 0.08rem;
      height:0.6rem;
      width:86%;
   }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

