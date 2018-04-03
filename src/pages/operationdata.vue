<template>
  <div id='operationdata'>
      <heade name='数据披露' arr='false'></heade>
      <div class="scrollbox">
          <section style='margin-bottom:0' class='runningday'>
          <h3>安全运营(天)</h3>
          <p><span>6</span><span>8</span><span>4</span></p>
       </section>
       <section class='datatotal'>
         <h4>平台数据总览</h4>
         <ul>
           <li v-for='item in data'>
             <p>{{item.money}}</p>
             <p>{{item.name}}</p>
           </li>
         </ul>
       </section>
       <section>
           <div id="echart1" ref='echart1'></div> 
       </section>
       <section>
        <p class="tit"><img src="../assets/timepct.png" alt=""></p>
           <div id="echart2" ref='echart2'></div> 
       </section>
       <section>
        <p class="tit"><img src="../assets/investpct.png" alt=""></p>
           <div id="echart3" ref='echart3'></div> 
       </section>
       <section>
        <p class="tit"><img src="../assets/paydata.png" alt=""></p>
           <div id="echart4" ref='echart4'></div> 
       </section>
      </div>
  </div>
</template>

<script>
import heade from '../components/heade'
import echarts from '../../static/js/echarts.min.js'
import swiperjs from '../../static/js/swiper.3.1.7.jquery.min.js'
export default {
  name: 'operationdata',
  data () {
    return {
       data:[{
        money:'2亿3984万343元',name:'平台撮合总额'
       },{money:'834万2324元',name:'为用户赚取收益'},
       {money:'1亿8930万7812元',name:'已还本金'},{
        money:'723万3984元',name:'待还本金'
       }],
       datalist:[15000000,2000000,9400000,10900000,3200000,6000000,3800000,4000000,25000000,20000000,6000000,2000000],
       monlist:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    }
  },
  components:{heade},
  mounted(){
    this.setOption()
  },
  methods:{
    setOption(){
       this.echart1=echarts.init(this.$refs.echart1);
       this.echart2=echarts.init(this.$refs.echart2);
       this.echart3=echarts.init(this.$refs.echart3);
       this.echart4=echarts.init(this.$refs.echart4);
      let option1={
        background:'#eee',
        grid:{
              x:60,
              x2:5,
              y:30,
              y2:30,
              backgroundColor:'#eee',
              borderWidth:1,
              borderColor:'yellow'
            },
        title:{
          text:'单位(元)',
          textStyle:{
            fontSize:12,
            color:'#333',
            fontWeight:400
          },
          x:10,
          y:0
        },
        calculable:true,
         xAxis : [{
          type : 'category',
          splitLine:{ 
           show:false 
          },
          data:this.monlist ,
          axisLabel:{
            interval:0, 
            textStyle:{
            color:'#333',
            fontSize:11,
          },
          margin:10,
          },
          axisLine:{
            lineStyle:{
              color:'#cbcbcb',
              width:1
            },
          }
        }],
       yAxis:[{
          type:'value',
          min:0,
          max:30000000,
          splitLine:{ 
           show:true, 
           lineStyle:{
            type:'solid',
            color:'#cbcbcb',
            fontSize:10
           }
          },
          axisLabel:{
          textStyle:{
            color:'#333',
            fontSize:10
          }
        },
        axisLine:{
            lineStyle:{
              color:'#cbcbcb',
              width:1
            }
          }
        }],
        series:[{
          name:'月成交量',
          type:'bar',
          barWidth:12,
          data:this.datalist,
          itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#ffc55a'
                    }, {
                        offset: 1,
                        color: '#ffad4b'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                }
            },
          label:{
            normal:{
              show:false,
              position:'insideTop'
            }
          },
        }]
       };

       let option2={
           legend: {
           orient : 'vertical',
           x : 'right',
           right:0,
           top:'middle',
           data:['普惠贷','优企贷','好房贷'],
           textStyle:{
            color:'#333',
            fontSize:14
           }
         },
         textStyle:{
          color:'rgba(255,255,255,0.3)'
         },
         tooltip: {
                show: true,
                formatter:'{b}占比({d}%)',
                trigger:'item',
            },
         calculable:true,
         series:[{
          name:'标的类型',
          type:'pie',
          radius:'55%',
          center:['35%','50%'],
          labelLine:{
            normal:{
              show:false,
              length:0.001
            }
          },
          data:[{
            value:80,name:'普惠贷',itemStyle:{
              normal:{
                color:'#ffb4b4',
              }
            }
          },{value:90,name:'优企贷',itemStyle:{
            normal:{
              color:'#848ff3'
            }
          }},{
            value:30,name:'好房贷',itemStyle:{
              normal:{
                color:'#ff5c5c'
              }
            }
          }],
          itemStyle:{
            emphsis:{
              shadowBlur:200,
              shadowColor:'rgba(0,0,0,0.5)'
            }
          },
          label:{
            normal:{
              textStyle:{
                color:'rgba(0,0,0,0.3)'
              },
              show:false,
              formatter:'{b}:{d}%' //显示百分比
            },
             emphasis:{
                show:false
              }
          }
         }]
       };

        let option3={
           legend: {
           orient : 'vertical',
           x : 'right',
           right:0,
           top:'middle',
           data:['1个月','2个月','3个月','4-6个月',"6个月以上"],
           textStyle:{
            fontSize:14
           }
         },
         textStyle:{
          color:'rgba(255,255,255,0.3)'
         },
         tooltip: {
                show: true,
                formatter:'{b}占比({d}%)',
                trigger:'item',
            },
          labelLine:{
            normal:{
                show:false,
                length:0.001
            }
          },
         calculable:true,
         series:[{
          name:'标的期限',
          type:'pie',
          radius:'55%',
          center:['35%','50%'],
          data:[{value:12,name:'4-6个月',itemStyle:{
            normal:{
              color:"#ffb4b4"
            }
          }},{value:312,name:'6个月以上',itemStyle:{
            normal:{
              color:'#70baf3'
            }
          }},{
            value:300,name:'1个月',itemStyle:{
              normal:{
                color:'#ff99c6',
              }
            }
          },{value:200,name:'2个月',itemStyle:{
            normal:{
              color:'#848cf3'
            }
          }},{
            value:232,name:'3个月',itemStyle:{
              normal:{
                color:"#fc5c5c"
              }
            }
          }],
          itemStyle:{
            emphsis:{
              shadowBlur:200,
              shadowColor:'rgba(0,0,0,0.5)'
            }
          },
          label:{
            normal:{
              textStyle:{
                color:'rgba(0,0,0,0.3)'
              },
              show:false
            },
             emphasis:{
                show:false
              }
          }
         }]
       };
        let option4={
           legend: {
           orient : 'vertical',
           x : 'right',
           right:0,
           top:'middle',
           data:['待还本金','已还本金','逾期未还'],
           textStyle:{
            fontSize:14
           }
         },
         textStyle:{
          color:'rgba(255,255,255,0.3)'
         },
         tooltip: {
                show: true,
                formatter:'{b}{c0}元,占比{d}%',
                trigger:'item',
            },
         calculable:true,
         series:[{
          name:'还款数据',
          type:'pie',
          radius:'55%',
          center:['35%','50%'],
          labelLine:{
            normal:{
               show:false,
               length:0.001
            }
          },
          data:[{
            value:20,name:'待还本金',itemStyle:{
              normal:{
                color:'#ff9926',
              }
            }
          },{value:50,name:'已还本金',itemStyle:{
            normal:{
              color:'#ff2c5c'
            }
          }},{
            value:30,name:'逾期未还',itemStyle:{
              normal:{
                color:'#842ff3'
              }
            }
          }],
          itemStyle:{
            emphsis:{
              shadowBlur:200,
              shadowColor:'rgba(0,0,0,0.5)'
            }
          },
          label:{
            normal:{
              textStyle:{
                color:'rgba(0,0,0,0.3)'
              },
              show:false
            },emphasis:{
                show:false
              }
          }
         }]
       };
       this.echart1.setOption(option1);
       this.echart2.setOption(option2);
       this.echart3.setOption(option3);
       this.echart4.setOption(option4);
    }
  }
}
</script>

<style scoped>
#operationdata{
  font-size: 0.2rem;
  margin-bottom: 0.8rem;
  background: #e4e4e4;
}
#operationdata>.scrollbox{
  position: absolute;
  top:0.8rem;
  left:0;
  right: 0;
  bottom:0;
  overflow-y: scroll;
}
.tit{
  font-size: 0;
  text-align: left;
  border-bottom:1px solid #e4e4e4;
}
.tit img{
  width:1.88rem;
}
#echart1{
  width:85%;
  height: 5rem;
  font-size: 0.22rem;
  margin:0 auto;
}
#echart2,#echart3,#echart4{
  margin:0 auto;
  width:96%;
  height: 4rem;
  font-size: 0.2rem;
}
section{
  background: #fff;
  margin-bottom: 0.2rem;
}
.datatotal{
  background:url(../assets/pebg.png);
  background-repeat:no-repeat;
  background-size: 100% 100%;
  background-position: center;
  padding:.2rem;
  margin-bottom: 0
}
.datatotal p,.datatotal h4{
   color:#834e28;
}
.datatotal h4{
  margin-bottom: 0.2rem
}
.datatotal ul{
  display:  flex; 
  flex-wrap: wrap;
  justify-content: space-around;
}
.datatotal li{
  flex: 1;
  flex-basis: 50%;
}
.datatotal li:nth-child(1){
   padding-bottom: 0.2rem;
   border-right: 1px solid #a87958;
   border-bottom:1px solid #a87958;
}
.datatotal li:nth-child(2){
  padding-bottom: 0.2rem;
   border-bottom:1px solid #a87958;
}
.datatotal li:nth-child(3){
  padding-top: 0.2rem;
   border-right:1px solid #a87958;
}
.datatotal li:nth-child(4){
   padding-top: 0.2rem
}
.runningday{padding:0.3rem 0;}
.runningday span{
   display: inline-block;
   border:1px solid #cdb583;
   color:#cdb583;
   width:0.5rem;
   height:0.8rem;
   font-size: 0.6rem;
   line-height:0.8rem;
   margin:0.15rem 0.1rem 0.15rem 0;
   font-weight: 400;
}
.running span:last-child{
  margin-right: 0;
}

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

