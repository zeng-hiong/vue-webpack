<template>
  <div>
    <HeadTop name='理财账单'  arr=false></HeadTop>
     <div id="billlist">
         <ul>
            <li v-for='list in lists'>
               <p>{{list.billname}} <span class='status'>{{list.status}}</span></p>
               <p>应收金额：<span>{{list.money}}</span></p>
               <img src="../assets/arrow.png" height="14" width="10" alt="">
            </li>
         </ul>
     </div>
  </div>
</template>

<script>
import HeadTop from '../components/heade'
export default {
  name: 'BillList',
  data () {
    return {
        lists:[{
          billname:'新手体验标235TY-3',
          status:'已收款',
          money:'10.12元'
        },{
          billname:'新手体验标235Y-20',
          status:'未收款',
          money:'0.12元'
        },{
          billname:'新手体验标235TY-21',
          status:'已收款',
          money:'10.12元'
        },{
          billname:'新手体验标235TY-22',
          status:'已收款',
          money:'10.12元'
        },{
          billname:'新手体验标235TY-23',
          status:'已收款',
          money:'0.122元'
        },{
          billname:'新手体验标235TY-24',
          status:'已收款',
          money:'0.22元'
        },{
          billname:'新手体验标235TY-25',
          status:'已收款',
          money:'12元'
        },{
          billname:'新手体验标235TY-26',
          status:'未收款',
          money:'0.562元'
        }]
    }
  },
  components:{
    HeadTop
  }
}
</script>

<style scoped>
    ul{
      text-align: left;
      padding: 0 0.3rem;
      font-size: 0.22rem;
      background: #fff;
    }
    li{
      border-bottom: 1px solid #e4e4e4;
      position: relative;
      padding:0.15rem 0;
    }
    a{width:100%;}
    img{
      width: 0.4rem;
      vertical-align: middle;
    }
    img:first-child{
      margin-right: 0.1rem
    }
    li:last-child{
      border-bottom: none;
    }
    li>img{
      position: absolute;
      top:50%;
      transform: translateY(-50%);
      right: 0.1rem;
      width:0.15rem;
   }
   li p:first-child{
     color:#666;
     margin-bottom: 0.15rem;
   }
   li p:last-of-type{
     color:#999;
   }
   li p:last-of-type span{
    color:pink;
   }
   .status{
    background:#ae9;
    display: inline-block;
    padding:0.04rem 0.08rem;
    margin-left: 0.2rem;
    border-radius: 0.2rem;
    font-size: 0.18rem;
   }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

