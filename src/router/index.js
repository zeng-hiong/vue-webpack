import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import My from '@/pages/My'
import Find from '@/pages/Find'
import Finical from '@/pages/Finical'
import ForgetPswd from '@/components/ForgetPassword'
import ForgetUsnm from '@/components/ForgetUsername'
import Sign from '@/pages/Sign'
import OperData from '@/pages/OperationData'
import Tabcon from '@/components/Tabcon'
import Aboutus from '@/pages/Aboutus'
import News from '@/pages/News'
import Security from '@/pages/Security'
import NewsDetail from '@/pages/newsdetail'
import Activity from '@/pages/activity'
import Withdraw from '@/pages/withdraw'
import Rechange from '@/pages/rechange'
import BillRecord from '@/pages/billrecord'
import MoneyRecord from '@/pages/moneyrecord'
import InviteFriend from '@/pages/invitefriend'
import BankManage from '@/pages/bankmanage'
import MyReward from '@/pages/myreward'
import BillList from '@/pages/billlist'
import More from '@/pages/more'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
    /*命名路由{path:'',components:{default:Foom,a:Bar,b:Baz}}*/
      path: '/',
      name: 'Tabcon',
      redirect:'/home',
      component: Tabcon,
      /*beforeEnter:(to,from,next)=>{}*/
      children:[{
        path:'/home',
      	name:'Home',
      	component:Home
      },{
      	path:'/find',
      	name:'Find',
      	component:Find
    },
    {
    	path:'/my',
    	name:'My',
    	component:My
    	/*alias:'/login' 别名、路由显示my,匹配规则为login,router-view显示login*/
    },{
    	path:'/finical',
    	name:'Finical',
    	component:Finical
    }]
    },{
    	path:'/login',
    	name:'Login',
    	component:Login
    },{
        path:'/sign',
        name:'Sign',
        component:Sign
    },{
    	path:'/fgtpswd',
    	name:'ForgetPswd',
    	component:ForgetPswd
    },{
    	path:'/fgtusnm',
    	name:'ForgetUsnm',
    	component:ForgetUsnm
    },{
      path:'/operatedata',
      name:'operatedata',
      component:OperData
    },{
      path:'/aboutus',
      name:'aboutus',
      component:Aboutus
    },{
      path:'/security',
      name:'security',
      component:Security
    },{
      path:'/news',
      name:'news',
      component:News
    },{
      path:'/newsdetail',
      name:'newsdetail',
      component:NewsDetail
    },{
      path:'/activity',
      name:'activity',
      component:Activity
    },{
      path:'/withdraw',
      name:'withdraw',
      component:Withdraw
    },{
      path:'/rechange',
      name:'rechange',
      component:Rechange
    },{
      path:'/moneyrecord',
      name:'moneyrecord',
      component:MoneyRecord
    },{
      path:'/billrecord',
      name:'billrecord',
      component:BillRecord
    },{
      path:'/invitefriend',
      name:'invitefriend',
      component:InviteFriend
    },{
      path:'/more',
      name:'more',
      component:More
    },{
      path:'/bankmanage',
      name:'bankmanage',
      component:BankManage
    },{
      path:'/billlist',
      name:'billlist',
      component:BillList}
    ,{
      path:'/myreward',
      name:'myreward',
      component:MyReward
    }
  ],
  scrollBehavior(to,from,savedPosition){
  	  if(savedPosition){
        console.log(savedPosition)
  	  	return savedPosition
  	  }else{
  	    return {x:0,y:0}
  	  }
  },
  beforeEach(to,from,next){
    console.log(to.matched)
    if(to.matched.length==0){//如果未匹配到路由
      from.name?next({name:from.name}):next('/')//如果上级也未匹配到路由则跳转到'/',
    }else{
      next()//如果匹配到正确跳转
    }
  }
})
