<template>
  <div id='news'>
     <Head name='公司动态' arr='false'></Head>
     <div class="newslist">
           <ul class="listtab">
             <li>官方公告</li>
             <li>公司动态</li>
           </ul>
           <ul>
             <li  v-for='list in newslist'>
              <a :href="list.path">
                 <p>{{list.title}}</p>
                 <p>{{list.time}}</p>
              </a>
             </li>
           </ul>
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
      newslist:[{title:'缤纷7月，清凉一夏！活动获奖名单。',time:'2017-08-04  1:00',path:'/newsdetail'},
      {title:'缤纷1月，清凉一夏！活动获奖名单。',time:'2017-08-04  12:00',path:'/newsdetail'},
      {title:'缤纷2月，清凉一夏！活动获奖名单。',time:'2017-08-04  13:00',path:'/newsdetail'},
      {title:'缤纷3月，清凉一夏！活动获奖名单。',time:'2017-08-04  15:00',path:'/newsdetail'},
      {title:'缤纷4月，清凉一夏！活动获奖名单。',time:'2017-08-04  44:00',path:'/newsdetail'},
      {title:'缤纷5月，清凉一夏！活动获奖名单。',time:'2017-08-04  67:00',path:'/newsdetail'},
      {title:'缤纷6月，清凉一夏！活动获奖名单。',time:'2017-08-04  50:00',path:'/newsdetail'},
      {title:'缤纷7月，清凉一夏！活动获奖名单。',time:'2017-08-04  40:00',path:'/newsdetail'},
      {title:'缤纷8月，清凉一夏！活动获奖名单。',time:'2017-08-04  30:00',path:'/newsdetail'},
      {title:'缤纷9月，清凉一夏！活动获奖名单。',time:'2017-08-04  20:00',path:'/newsdetail'},
      {title:'缤纷10月，清凉一夏！活动获奖名单。',time:'2017-08-04  10:00',path:'/newsdetail'}]
    }
  },
  components:{foote,Head}
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
  }
   a{display: block;}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

