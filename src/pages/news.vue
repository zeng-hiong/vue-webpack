<template>
  <div id='news'>
     <Head name='公司动态' arr='false'></Head>
     <div class="newslist">
           <ul class="listtab">
             <li @click='changeTaba'>官方公告</li>
             <li @click='changeTabb'>公司动态</li>
           </ul>
           <keep-alive>
               <ul v-if='tab'>
                 <li  v-for='list in newslist'>
                  <a :href="list.path">
                     <p>{{list.title}}</p>
                     <p>{{list.time}}</p>
                     <span v-show='list.flag'></span>
                  </a>
                 </li>
               </ul>
               <ul v-else>
                <li v-for='list in announcelist'>
                  <a :href="list.path">
                     <p>{{list.title}}</p>
                     <p>{{list.time}}</p>
                     <span v-show='list.flag'></span>
                  </a>
                 </li>
               </ul>
          </keep-alive>
     </div>
     <foote></foote>
  </div>
</template>

<script>
import Head from '../components/heade.vue'
import foote from '../components/foote.vue'
export default {
  name: 'News',
  data () {
    return {
      newslist:[{title:'缤纷7月，清凉一夏！活动获奖名单。',time:'2017-08-04  1:00',path:'/newsdetail',flag:false},
      {title:'缤纷1月，清凉一夏！活动获奖名单。',time:'2017-08-04  12:00',path:'/newsdetail',flag:false},
      {title:'缤纷2月，清凉一夏！活动获奖名单。',time:'2017-08-04  13:00',path:'/newsdetail',flag:true},
      {title:'缤纷3月，清凉一夏！活动获奖名单。',time:'2017-08-04  15:00',path:'/newsdetail',flag:true},
      {title:'缤纷4月，清凉一夏！活动获奖名单。',time:'2017-08-04  44:00',path:'/newsdetail',flag:false},
      {title:'缤纷5月，清凉一夏！活动获奖名单。',time:'2017-08-04  67:00',path:'/newsdetail',flag:false},
      {title:'缤纷6月，清凉一夏！活动获奖名单。',time:'2017-08-04  50:00',path:'/newsdetail',flag:false},
      {title:'缤纷7月，清凉一夏！活动获奖名单。',time:'2017-08-04  40:00',path:'/newsdetail',flag:false},
      {title:'缤纷8月，清凉一夏！活动获奖名单。',time:'2017-08-04  30:00',path:'/newsdetail',flag:true},
      {title:'缤纷9月，清凉一夏！活动获奖名单。',time:'2017-08-04  20:00',path:'/newsdetail',flag:false},
      {title:'缤纷10月，清凉一夏！活动获奖名单。',time:'2017-08-04  10:00',path:'/newsdetail',flag:true}],
      announcelist:[{title:'1缤纷7月，凉一夏！活动奖名单。',time:'201708-04  1:00',path:'/newsdetail',flag:true},
      {title:'1纷月，清凉一夏！活动奖名单。',time:'0708-04  1200',path:'/newsdetail',flag:true},
      {title:'1纷2月，清一夏！活动奖名单。',time:'2017-8-04  13:00',path:'/newsdetail',flag:false},
      {title:'1纷月，清凉一！活动获奖单。',time:'2017-0804  15:00',path:'/newsdetail',flag:true},
      {title:'1纷4月，清凉一夏！活动获奖名单。',time:'207-08-04  44:00',path:'/newsdetail',flag:false},
      {title:'1缤纷5月，清凉一夏！活获名单。',time:'2017-08-04  67:00',path:'/newsdetail',flag:true},
      {title:'1纷月，清凉一夏！活动获奖名单。',time:'2017-08-04  5:00',path:'/newsdetail',flag:false},
      {title:'1纷7月，凉一夏！活动奖名单。',time:'2017-08-04  4000',path:'/newsdetail',flag:true},
      {title:'1纷8月，清凉一夏！活动奖名单。',time:'2017-08-04  30:00',path:'/newsdetail',flag:true},
      {title:'纷9月，清凉一夏！活动奖名单。',time:'2017-8-04  20:00',path:'/newsdetail',flag:false},
      {title:'1纷10月，清凉一夏！活动获名单。',time:'201708-04  10:00',path:'/newsdetail',flag:true}],
      tab:false
    }
  },
  components:{foote,Head},
  methods:{
    changeTaba:function(){
       return this.tab=true
    },
    changeTabb:function(){
       return this.tab=false
    }
  }
}
</script>

<style scoped>
#news{
  font-size: 0.2rem;
  background: #ddd;
}
li{
  margin-bottom: 0.2rem;
  background: #fff;
}
.newslist{
  position: absolute;
  top:0.8rem;
  left:0;
  right: 0;
  bottom: 0.8rem;
  overflow-y: scroll;
  background: #ddd;
}
.listtab{
    display: flex;
    justify-content: space-around;
   }
.listtab li{
   flex:1;
   padding:0.15rem;
  }
.listtab li:first-of-type{
      border-right: 1px solid #eee
   }
ul:last-of-type li{
    text-align: left;
    padding:0.15rem 0.2rem;
    line-height: 1.6em;
    position: relative;
  }
   a{display: block;}
   li span{
    position: absolute;
    right: 0.6rem;
    top:0;
    bottom:0;
    margin:auto;
    background: pink;
    width:6px;
    height:6px;
    border-radius: 50%;
   }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

