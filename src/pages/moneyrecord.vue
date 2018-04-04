<template>
  <div>
    <HeadTop name='资金记录'  arr=false></HeadTop>
     <div id="moneyrecord">
         <div v-for='deal in deallist'>
           <p>{{deal.day}}<span>{{deal.time}}</span></p>
           <div>
               <p>交易类型<span>{{deal.type}}</span></p>
               <p>金额(元)<span>{{deal.money}}</span></p>
           </div>
         </div>
     </div>
  </div>
</template>

<script>
import HeadTop from '../components/heade'
export default {
  name: 'moneyrecord',
  data () {
    return {
        deallist:[
          {day:'2018-04-11',time:'12:12',type:'正常类型',money:'+￥0.45'},
          {day:'2018-03-11',time:'11:12',type:'扣除体杨金投资额',money:'-￥0.25'},
          {day:'2018-02-01',time:'17:22',type:'正常类型',money:'+￥1.25'},
          {day:'2017-04-21',time:'15:42',type:'正常类型',money:'+￥0.25'},
          {day:'2014-04-08',time:'06:12',type:'赠送体验金',money:'+￥0.25'},
          {day:'2016-04-04',time:'12:12',type:'正常类型',money:'+￥10.25'},
          {day:'2017-04-02',time:'07:34',type:'正常类型',money:'+￥0.25'},
          {day:'2018-01-11',time:'12:45',type:'正常类型',money:'+￥0.25'},
          {day:'2018-04-18',time:'09:12',type:'赠送体验金',money:'+￥10.25'},
          {day:'2018-04-21',time:'04:12',type:'赠送体验金',money:'+￥0.25'},
          {day:'2016-05-11',time:'09:12',type:'正常类型',money:'-￥01.25'}
        ]
    }
  },
  components:{
    HeadTop
  }
}
</script>

<style scoped>
    #moneyrecord{
      position: absolute;      
      top:0.8rem;
      left:0;
      right: 0;
      bottom: 0;
      margin:auto;
      overflow-y: scroll;
      font-size: 0.3rem;
      text-align: left;
    }
    #moneyrecord>div div{
      padding:0.15rem 0.3rem;
    }
    p{
      padding:0.15rem 0;
    }
    #moneyrecord>div p span{
        margin-left: 0.3rem
    }
    #moneyrecord>div p:last-child span{
        color:#f21f1f;
    }
   #moneyrecord>div>p{
    background: #ebebeb;
    padding:0.2rem 0.3rem;
    text-align: center;
   }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

