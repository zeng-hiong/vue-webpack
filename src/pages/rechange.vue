<template>
  <div>
    <HeadTop name='充值'  arr=false></HeadTop>
    <div id="rechange">
        <div>
          <p>账户余额：<span>{{account.totalmoney}}</span></p>
          <p>可用余额：<span>{{account.useablemoney}}</span></p>
          <p>体验金额：<span>{{account.experiencemoney}}</span></p>
        </div>
        <input type="number" required placeholder="请输入充值金额">
        <button class="btn">确认</button>
    </div>
  </div>
</template>

<script>
import HeadTop from '../components/heade'
export default {
  name: 'Rechange',
  data () {
    return {
        account:{totalmoney:'12.02元',useablemoney:'9.08元',experiencemoney:'1.02元'}
    }
  },
  components:{
    HeadTop
  }
}
</script>

<style scoped>
    #rechange{
      font-size: 0.3rem;
      text-align: left;
    }
    #rechange div{
      padding:0.2rem 0;
    }
    p{
      padding:0.15rem 0.3rem;
      color:#666;
    }
    p span{
      color:#f21f1f;
      padding-left:0.3rem;
      padding:0.2rem;
    }
    input{
      border:1px solid #D0B57C;
      padding:0.3rem 0.3rem;
      width: 100%;
      border-left: 0;
      border-right: 0;
    }
    button{
      width: 85%;
      margin:0 auto;
      background: #d0b582;
      height: 0.8rem;
      border-radius: 0.15rem;
      line-height: 0.8rem;
      text-align: center;
      margin-top: 0.8rem;
      display: block;
      color:#fff;
      font-size: 0.34rem; 
    }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

