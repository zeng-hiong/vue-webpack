<template>
  <div id='my'>
      <div class="headimg">
         <div class="fl">
             <img src="../assets/portrait.png" height="35" width="35" alt="" class='fl'  />
             <div class="fr">
                 <p class="name">1982379283</p>
                 <p class="memclass">普通会员<img src="../assets/arrow.png" height="8" width="4" alt="" /></p>
             </div>
         </div>
        <img src="../assets/eyeopena.png" height="17" width="17" alt="" class='fr eye' />
      </div>
      <div class="part countdetail">
          <img src="../assets/img3.png"  alt="" class='bg' />
          <div class="polygon">
            <img src="../assets/polygon.png" alt="">
            <div class="leftmoney">
              <p>可用余额(元)</p>
              <p>0.00</p>
            </div>
            <div class="coldmoney">
              <p>冻结资金(元)</p>
              <p>0.00</p>
            </div>
            <div class="totalincome">
              <p>累计收益(元)</p>
              <p>0.00</p>
            </div>
            <div class="waitinterst">
              <p>待收利息(元)</p>
              <p>0.00</p>
            </div>
            <div class="totalinvest">
              <p>累计投资总额(元)</p>
              <p>0.00</p>
            </div>
            <div class="waitmoney">
              <p>待收本金(元)</p>
              <p>0.00</p>
            </div>
            <div class="totalall">
              <p>293892389239</p>
              <p>总资产(元)</p>
            </div>
          </div>
      </div>
      <div class="part btnpar">
         <p><router-link to='/rechange'>充值</router-link><router-link to='withdraw'>提现</router-link></p>
      </div>
      <div class="part">
         <ul>
            <li v-for='lst in list'><router-link :to='lst.path'><img :src="lst.src" alt="">{{lst.name}}<img src="../assets/arrow.png"  alt=""  /></router-link></li>
         </ul>
      </div>
      <div class="part">
        <ul>
          <li v-for='lst in list1'><router-link :to='lst.path'><img :src="lst.src" alt="">{{lst.name}}<img src="../assets/arrow.png" alt="" /></router-link></li>
        </ul>
      </div>
      <div class="part">
          <ul>
          <li v-for='lst in list2'><router-link :to="lst.path"><img :src="lst.src" alt="">{{lst.name}}<img src="../assets/arrow.png" alt=""  /></router-link></li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'My',
  data () {
    return {
      list:[{src:require('../assets/myaward.png'),name:'我的奖励',path:'/myreward'},{
        src:require('../assets/invrcd.png'),name:'投标记录',path:'/billrecord'
      },{
        src:require('../assets/invrcd.png'),name:'资金记录',path:'/moneyrecord'
      }],
      list1:[{src:require('../assets/banklo.png'),name:'银行卡管理',path:"/bankmanage"},{src:require('../assets/billlist.png'),name:'理财账单',path:'billlist'}],
      list2:[{src:require('../assets/invifriend.png'),name:'邀请好友',path:'/invitefriend'},{src:require('../assets/more.png'),name:'更多',path:'/more'}]
    }
  },
  components:{}
}
</script>

<style scoped>
   #my{
    font-size: 0.24rem;
    margin-top: -0.8rem;
    background: #ddd;
    overflow: hidden;
   }
   .headimg{
    overflow: hidden;
    padding:0.04rem 0.2rem;
    border-bottom: 1px solid #e4e4e4;
    background: #fff;
   }
   .headimg img{
    vertical-align: middle
   }
   .headimg div{
    overflow: hidden;
   }
   .memclass{
    color: #333;
    padding-left:0.15rem;
   }
   .memclass img{
    margin-left:0.1rem;
    vertical-align: inherit;
   }
   .fl{
    float: left;
   }
   .fr{
    float: right;
   }
   .countdetail{
    position: relative;
    text-align: left;
    color:#834e28;
    font-size: 0;
   }
   .countdetail div{
    font-size:0.16rem;
    position:absolute;
    line-height: 1.2em;
    white-space: nowrap;
   }
   .polygon{
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
   }
   .polygon img{
    width:2.8rem;
   }
   .name{
    font-size: 0.22rem;
    color:#333;
    padding-left:0.15rem;
    line-height: 1.5em;
   }
   .part{
    margin-bottom: 0.26rem
   }
   .bg{
    width:100%;
   }
   .eye{
    transform:translateY(50%);
   }
   .leftmoney{
    top:-.35rem;
    left:-.5rem;
   }
   .coldmoney{
    top:-0.35rem;
    right:-.7rem;
    text-align: right;
   }
   .totalinvest{
    bottom:-0.4rem;
    left:-1.2rem;
   }
   .waitmoney{
    bottom:-0.4rem;
    right:-.7rem;
    text-align: right
   }
   .totalincome{
     left:-1.3rem;
     top:50%;
     transform: translateY(-51%);
   }
   .waitinterst{
     right:-1.3rem;
     top:50%;
     transform: translateY(-51%);
     text-align: right;
   }
   .countdetail .totalall{
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    font-size: 0.2rem;
    line-height: 1.6em;
    text-align: center;
   }
   .btnpar{
    padding:0.1rem 0;
    background: #fff;
   }
   .btnpar a{
    padding:0.1rem 0;
    display: inline-block;
    font-size:0.22rem;
    color: #393939;
    width:50%;
   }
   .btnpar a:first-child{
    border-right:1px solid #dfdfdf;
   }
   ul{
    text-align: left;
    background: #fff;
    padding:0 0.3rem;
    font-size: 0.22rem;
    color:#787878;
   }
   li{
    height: .86rem;
    line-height: .86rem;
    border-bottom:1px solid #e4e4e4;
    position: relative;
   }
   li:last-child{
    border-bottom: none;
   }
   li img{
    width:0.4rem;
    vertical-align: middle;
   }
   li img:nth-of-type(1){
    margin-right: 0.1rem;
   }
   li img:last-child{
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    right: 0.1rem;
    width:0.15rem;
   }
  li a{
    width: 100%;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

