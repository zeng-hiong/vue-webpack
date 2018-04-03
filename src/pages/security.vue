<template>
  <div id='security'>
      <Head name='安全保障' arr='false' />
      <section>
        <img src="../assets/pricpttit.png" height="29" width="61" alt="">
        <div class='indent'>平台资金通过广东华兴银行存管，客户出借资金不通过我公司账户划付，而是华兴银行接受到客户的出借、提现指令后操作，平台追求安全稳定。</div>
        <img src="../assets/priccon.png" height="43" width="238" alt=""><br>
        <img src="../assets/riskprtit.png" height="29" width="42" alt="">
        <div>
          确保资金用途的真实性、一致性，还款来源的稳定性、可控性是风控模型不变核心和风险管理的重中之重。宝元贷坚持以风控为平台生命线的原则，将资金用途的监管和还款回笼的监控放在第一位，并将其尽可能向对应出借人公示。平台对优质低风险借款项目进行严格筛选，牢牢掌控融资客户资金流、货流、信息流，严格审核借款用途的真实性，严格控制借款划付的一致性，严格监控应收账款回笼的稳定性，定期更新企业生产经营情况，保证还款来源的有效性。打造严谨科学的风控体系、完善的贷后检查和风险对冲机制，为出借人撑起抵御风险保护伞。
        </div>
        
        <img src="../assets/riskcon.png" height="51" width="237" alt="">
        <img src="../assets/mestrsprtit.png" height="29" width="80" alt=""><br>
        <div>
          宝元贷尽可能公示完整借款人信息、借款材料、担保函等资料，给予出借人充分知情权，出借人可以根据自己的需求及实际情况进行分散投资。同时，宝元贷与合作担保机构将对借款进行全程的监管跟踪服务，包括抵押的评估、企业的还款来源分析等，让出借人省时省心。
        </div>
        <img src="../assets/mesctcon.png" height="133" width="202" alt="">
        <img src="../assets/lawprtit.png" height="29" width="42"><br>
        <div>宝元贷致力于为广大急需投资渠道的人群和有借款需求的人群搭建一个信息透明、诚信度高、风险低、回报稳定、成本可控的互联网借贷撮合平台。据我国《合同法》及其它相关法律法规规定，我国法律允许普通民事主体之间发生借贷关系，并认可借款人还本付息的合法性。出借人及借款人之间的借贷行为、宝元贷提供的居间服务及全部电子合同均具备法律效力，出借人受到法律保护。宝元贷通过严格的风险审核，使民间借贷更加规范、阳光、透明，更用专业的风控手段和代偿机制大大降低了坏账风险。平台项目获购满额后即生成合同，合同条款由专业律师拟定，文件合法、有效。</div>
        <img src="../assets/lawprtcon.png" height="67" width="238" alt=""><br>
        <img src="../assets/webkitprtit.png" height="29" width="60">
        <div>出借人在充值和提现前必须进行实名认证、手机绑定等多重安全认证，任何账户资金的提现，只能转至本人实名绑定的银行账户，做到资金原进原出，完全保障出借人的资金划付安全。宝元贷在为出借人获取利益的同时保证数据及资金安全。采用SGC 128位数据传输加密保护技术，确保让客户在进行个人账户管理、充值等涉及敏感信息的操作时，信息被自动加密，然后才被安全地通过互联网发送出去，有效防止病毒入侵和防止恶意攻击行为。</div>
        <img src="../assets/setycon.png" height="92" width="238">
      </section>
  </div>
</template>

<script>
import Head from '../components/heade.vue'
export default {
  name: 'security',
  data () {
    return {
     
    }
  },
  components:{Head}
}
</script>

<style scoped>
  #security{
    font-size: 0.2rem;
  }
  #security section{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top:0.8rem;
    overflow-y: scroll;
    padding:0.2rem;
  }
  #security img{
    margin:0.2rem ;
  }
  #security section div{text-indent:1.6em; text-align: left;line-height: 1.6em;color:#666;}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

