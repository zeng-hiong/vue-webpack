<template>
  <div>
    <HeadTop name='关于我们'  arr=true></HeadTop>
   <div id="aboutUs">
    <div class="sectionbox">
        <div class="sectiontitle">
          <span>平台简介</span>
        </div>
        <div class="sectioncontent intro">
            <p>宝元贷是大型金融集团银泽通旗下互联网金融理财平台。2015年1月在深圳前海注册成立。宝元贷旨在打造一个专业、规范、透明、安全、高效的互联网金融服务平台,为有金融需求者提供低成本、高效率的融资服务,为投资人提供高收益、高保障、低门槛、低分险的理财产品。宝元贷借款标的在以实物抵押的同时,采取广东华兴银行存管,并凭借严谨科学的风控体系、完善的贷后检查和风险对冲机制,为投资人资金安全保驾护航。</p>
        </div>
    </div>
     <div class="sectionbox">
           <div class="sectiontitle">
             <span>管理团队</span>
           </div>
           <div class="sectioncontent">
               <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                             <div class="teambox">
                               <div class="teamtitle">
                                   <img src="../assets/images.jpg" alt="">
                                   <div>
                                      <p>廖少鸿</p>
                                       <p>集团董事局主席</p>
                                   </div>
                               </div>
                               <div class="introduce">
                                   <p>
                                     资深金融理财领域专家，擅长资本运作。多家上市公司董事，担任过多家企业董事长。对于投资、理财、放贷、风控等领域具有深刻的操作经验。 他坚信：日臻成熟的银泽通将会以更加稳健的步伐，以时不我待的紧迫感、舍我其谁的使命感，带领民间金融产业跨步前进，实现普惠金融的理想。
                                   </p>
                               </div>
                             </div>
                        </div>
                        <div class="swiper-slide">
                             <div class="teambox">
                               <div class="teamtitle">
                                   <img src="../assets/images (2).jpg" alt="">
                                     <div>
                                      <p>张金杰</p>
                                       <p>银泽通集团CEO</p>
                                   </div>
                               </div>
                               <div class="introduce">
                                   <p>
                                     《金融家》2015年封面人物， 14年金融行业经营管理及风险管理工作经验。 曾参与经营管理过的深圳某支付公司,年交易额突破数万亿人民币。2010年10月创办深圳银泽通信息技术公司并担任董事长，全面负责公司经营管理与市场开展。曾兼任职与深圳银泽通信息技术集团参股企业福建壹点信息技术有限公司CEO、担任壹点支付信息技术有限公司CEO。"坦诚沟通、真诚交流"铭刻于心并以此为宗旨经营管理集团旗下各产业公司！
                                   </p>
                               </div>
                             </div>
                        </div>
                        <div class="swiper-slide">
                             <div class="teambox">
                               <div class="teamtitle">
                                   <img src="../assets/images (3).jpg" alt="">
                                   <div>
                                      <p>赵永烈</p>
                                       <p>银泽通集团VP&宝元贷CEO</p>
                                   </div>
                               </div>
                               <div class="introduce">
                                   <p>
                                     拥有14年的互联网、移动互联网运营经验，9年的创业经验。 曾任EIMSKIP（怡之航）ASIA 亚洲区副总裁，负责亚洲国家和地区业务开展和营销工作，后任中国福建壹点信息技术有限公司副总裁，专注于支付领域的研究，资深互联网金融产业研究、市场营销领域专家。
                                   </p>
                               </div>
                             </div>
                        </div>
                         <div class="swiper-slide">
                             <div class="teambox">
                               <div class="teamtitle">
                                   <img src="../assets/images (6).jpg" alt="">
                                   <div>
                                      <p>郑胜前</p>
                                       <p>宝元贷COO</p>
                                   </div>
                               </div>
                               <div class="introduce">
                                   <p>
                                     互联网金融专栏作家，新华日报旗下《互联网金融观察》杂志特邀撰稿人。曾供职于国内多家上市传媒集团旗下财经类媒体，从事新闻采编和媒体营销工作。2015年入道互联网金融行业，担任某百强p2p平台运营推广总监。擅长平台团队架构与运营体系搭建，精通用户运营、内容运营、市场推广，倡导平台的体系化、数据化、精细化运营。
                                   </p>
                               </div>
                             </div>
                        </div>
                    </div>
                </div>
           </div>
      </div>
       <div class="sectionbox">
           <div class="sectiontitle">
             <span>资质荣誉</span>
           </div>
           <div class="sectioncontent">
               <Scroll :imgs='lists'></Scroll>
           </div>
        </div>
         <div class="sectionbox">
           <div class="sectiontitle">
            <span>价值观</span>
           </div>
           <div class="sectioncontent value">
            <p><span>我们的理念</span> <span>专业风控、合规运营、安全高效、稳健收益。</span></p>
            <p><span>我们的价值</span> <span> 为客户创造利润，为社会创造价值。</span></p>
            <p><span>我们的使命</span> <span> 让客户在互联网时代便捷理财、轻松融资。</span></p>
            <p><span>我们的愿景</span> <span> 打造中国领先的专业、规范、透明、安全的投融资平台。
             </span></p>
           </div>
        </div>
   </div>
</div>
</template>

<script>
import HeadTop from '../components/heade'
import Scroll from '../components/scroll'
export default {
  name: 'Aboutus',
  data () {
    return {
      lists:[{src:require('../assets/aboutus_zi02.png')},{
        src:require('../assets/aboutus_zi03.png')
      },{src:require('../assets/aboutus_zi04.png')},
      {src:require('../assets/aboutus_zi05.png')},{src:require('../assets/aboutus_zi06.png')},
      {src:require('../assets/aboutus_zi07.png')}]
    }
  },
  components:{
    HeadTop,Scroll
  }
}
</script>

<style scoped>
#aboutUs{
  text-align: left;
  position: absolute;
  top:0.8rem;
  left:0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
}
    .sectionbox{
  font-size: .22rem;
  background: #fff;
}
.sectionbox:not(:last-child){
  margin-bottom: 2%
}
.sectiontitle{
  color:#d4bd8b;
  width:100%;
  padding:4% 3% 3%;
}
.sectiontitle span{
  border-left:2px solid #cfb886;
  padding-left:2%;
}
.sectioncontent p{
    color:#aeaeae;
    padding: 0 2% 2%;
    font-weight: 200;
    line-height:1.9em;
}
.introduce p{
   color:#aeaeae;
   text-indent: 2em;
}
.swiperslide{
  border:2px solid red;
  background: red;
}
.teamtitle{
  position: relative;
  padding-left:2%;
}
.teamtitle img{
  width:15%;
}
.teamtitle div{
  position: absolute;
  top:50%;
  transform:translateY(-50%);
  -webkit-transform:translateY(-50%);
  width:60%;
  left:17%;
}
.teamtitle div p:first-child{
  color:#333;
  font-size: .24rem;
}
.teamtitle div p:last-child{
  font-size: 0.24rem;
}
.swiper-slide>img{
    width:80%;
    display: block;
    margin:0 auto;
}
.value p span{
  display: inline-block;
}
.value p span:first-child{
  color:#666;
  width:20%;
  vertical-align: top
}
.value p span:last-child{
width:75%;
 }
.intro p{
  text-indent: 2em;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

