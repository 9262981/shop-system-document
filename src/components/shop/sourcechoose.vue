<template>
  <div class="routerview">
    <h3>源码方案选定</h3>

    <h4>方案一:自主开发</h4>
      优点:全部针对企业进行定制服务;<br>
      企业需要配置产品经理梳理需求/UI设计人员/后端前端开发人员等<br>
      缺点:开发周期慢,不是很适应目前我们的情况<br>

    <h4>方案二:二次开发</h4>
      利用网络开源商城系统 (PHP相关开源系统较多),进行二次开发;<br>
      国内开源系统<br>
      ecshop<br>
      好的开源少一些/基本都是打着开源的旗号卖授权/基本方案指向到了方案三.1<br><br>
      符合国情/项目分类/目录结构/购物流程比较本地化<br><br>

      国外开源系统<br>
      选择多一些<br>
      zencart/Magento/opencart/PrestaShop/Magento/osCommerce<br>
      相对有更多的选择,多一些翻译等工作,支付接口对接需要自己造轮子等<br><br>

      企业需要配置:<br>
      php开发人员/电商相关行业经验/必须做过支付接口对接服务.1-2人<br>
      UI设计可以找外包/整套包出去/价格不会很高<br>

    <h4>方案三:现成解决方案</h4>
      偏小型公司服务提供商:<br>
      优点:对方公司有团队进行敏捷,快速开发,解决企业定制问题.<br>
      缺点:前期合同约束到位,怕做到半路公司跑路等情况发生<br><br>

      http://www.aircheng.com/<br>
      iwebshop 陈经理 yii框架<br>
      qq:846327344<br>
      tel:13188876801<br><br>

      https://www.yunec.cn/<br><br>

      http://www.niushop.com.cn/<br>
      贾经理:thinkPHP框架<br>
      qq:23026014<br>
      tel:18003405095<br>
      http://www.shopnc.net/<br><br>

      最好配置一名php技术人员,不管是系统的学习使用,以及后期的修改二次开发.需要有一名熟悉的工程师跟踪.对接.<br>

      比较稳定的商城解决方案:(云商城方案/类似与微店/不过还算比较独立域名LOGO等都是企业个人的对外看不出来)<br>
      优点:稳定,系统设计相对完善,选择模版以后直接对接产品等信息<br>
      缺点:很难进行二次开发等针对企业的解决方案(某些服务商也有二次开发服务,具体价格服务要查看其网站)<br>

      西部数据<br>
      商城:https://www.west.cn/services/miniprogram/<br>
      小程序:https://www.west.cn/web/sites/default/shop#shop-taocan<br>

      美橙互联<br>
      商城:https://www.cndns.com/cn/shop/index.aspx<br>
      小程序:https://www.cndns.com/cn/website/xcx.aspx<br>

      大商创
      https://www.dscmall.cn/platform.html<br>
      https://www.dscmall.cn/function.html<br><br>

      http://www.tp-shop.cn/tpsaas/(新增)<br>


      其实目前如果二次开发 除了国内 ecshop 基本没有好的解决方案了.<br>
      另外一条路线就是国外的系统进行二次开发,相应的人力时间成本会高一些; <br>
      系统可行性分析基本都指向了方案 3.1 <br>

      http://www.aircheng.com  看看这套东西怎么样，我搭了一套 http://47.99.135.14   admin  123.com
      <SourceChooseS></SourceChooseS>
 
  </div>
</template>

<script>
import SourceChooseS from './sourcechooses' 

export default {
  name: "SourceChoose",

  data() {
    return {};
  },
  components: {
    SourceChooseS
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
