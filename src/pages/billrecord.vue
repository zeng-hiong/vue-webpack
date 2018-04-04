<template>
  <div>
    <HeadTop name='投标记录'  arr=false></HeadTop>
     <div id="billrecord">
         <div class='listbox' v-for='billdetail in billlist'>
             <p>{{billdetail.billname}}</p>
             <div>
                <ul>
                  <li>
                     <span>{{billdetail.money}}</span><span>元</span>
                     <br>投标金额
                  </li>
                  <li>
                     <span>{{billdetail.dateline}}</span>天
                     <br>借款期限
                  </li>
                  <li>
                     {{billdetail.time}}
                     <br>投标时间
                  </li>
                </ul>
             </div>
         </div>
         
     </div>
  </div>
</template>

<script>
import HeadTop from '../components/heade'
export default {
  name: 'billrecord',
  data () {
    return {
       billlist:[
       {billname:'新手体验标1803TY-57 ',money:'332',dateline:'13',time:'2017-11-02'},
       {billname:'优企贷18040316RE-57 ',money:'465',dateline:'30',time:'2017-05-15'},
       {billname:'新手体验标1303TY-23 ',money:'346',dateline:'22',time:'2017-12-18'},
       {billname:'优企贷1804031646-14 ',money:'648',dateline:'35',time:'2017-09-22'},
       {billname:'新手体验标1803TY-56 ',money:'4548',dateline:'23',time:'2013-08-05'},
       {billname:'优企贷1804031646-26 ',money:'638',dateline:'30',time:'2015-08-21'},
       {billname:'新手体验标1803TY-27 ',money:'984',dateline:'13',time:'2018-04-11'},
       {billname:'优企贷1804031644-46 ',money:'123',dateline:'13',time:'2017-05-05'},
       {billname:'优企贷1804031646-23 ',money:'792',dateline:'23',time:'2017-07-01'}
       ]
    }
  },
  components:{
    HeadTop
  }
}
</script>

<style scoped>
    #billrecord{
      font-size: 0.3rem;
      text-align: left;
      background: #EEE;
      position: absolute;
      top:0.8rem;
      left: 0;
      right: 0;
      bottom: 0;
      margin:auto;
      overflow-y: scroll;
    }
    .listbox{
      background: #fff;
      margin-bottom: 0.2rem;
      padding:0 0.3rem;
    }
    .listbox>p{
      border-bottom: 1px solid #eee;
      padding:0.2rem;
    }
    .listbox>div ul{
        display: flex;
        justify-content: space-around;
        padding:0.2rem;
        color: #999;
    }
    .listbox li{
      flex:1;
      line-height: 1.6em;
    }
    .listbox li:nth-child(1){
      text-align: left
    }
    .listbox li:nth-child(1) span:first-child{
      font-size: 0.4rem;
    }
    .listbox li:nth-child(1) span{
      color:red;
    }
    .listbox li:nth-child(2){
      text-align: center;
    }
    .listbox li:nth-child(2) span{
      font-size: 0.4rem;
      color:#666;
    }
    .listbox li:nth-child(3){
      text-align: right;
    }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

