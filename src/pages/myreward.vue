<template>
  <div>
    <HeadTop name='我的奖励'  arr=false></HeadTop>
      <div id='award'>
          <ul>
            <li>紅包</li>
            <li>体验金</li>
            <li>加息劵</li>
          </ul>
          <div v-for='award in awardlist' class='awardbox'>
              <div>
                  <div class='leftbox'>
                     <div><span>￥</span>{{award.money}}</div>
                     <div>
                        <p>{{award.title}}</p>
                        <div v-if='award.type'>投{{award.timelineone}}满{{award.moneyone}}，可返现</div>
                        <div v-else>
                            <p>投{{award.timelineone}}满{{award.moneyone}}，可返现</p>
                            <p>或</p>
                            <p>投{{award.timelinetwo}}满{{award.moneytwo}}，可返现</p>
                        </div>
                     </div>
                  </div>
                  <p>有效时间：{{award.gettime}}</p>
              </div>
              <div>可返现</div>
          </div>
      </div>
     </div>
  </div>
</template>

<script>
import HeadTop from '../components/heade'
export default {
  name: 'myreward',
  data () {
    return {
        awardlist:[
        {title:'新人加入，赠送新人红包',money:'30',timelineone:'3个月',timelinetwo:'',moneyone:'4000元',moneytwo:'',gettime:'2018.02.21-2019.11.01',type:true}
        ]
    }
  },
  components:{
    HeadTop
  }
}
</script>

<style scoped>
    #award{
      font-size: 0.3rem;
      background: #eee;
      position: absolute;
      top: 0.8rem;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      overflow-y: scroll;
   }
   ul{
     display: flex;
     justify-content: space-around;
     background: #fff;
     border-bottom: 1px solid #eee;
   }
   li{
    flex:1;
    padding:0.2rem 0;
   }
   .awardbox{
    display: flex;
    align-items: center;
    background: #fff;
    margin-bottom: 0.2rem;
   }
   .awardbox>div:first-child{
     flex:2;
     color:#999;
   }
   .awardbox>div:last-child{
     align-self: stretch;
   }
   .leftbox{
    border-bottom: 1px dashed #eee;
    padding:0.3rem 0;
   }
   .leftbox>div:last-child{
     flex:2;
     text-align: left;
   }
   .leftbox>div:last-child>p{
    color:#666;
   }
   .leftbox>div:first-child{
     flex-basis:20%; 
     color:red;
   }
   .leftbox>div:first-child span{
     color:red;
   }
   .awardbox>div>div{
    display: flex;
    align-items: center;
   }

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

