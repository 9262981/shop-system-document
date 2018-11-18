import Vue from 'vue'
import VueRouter from 'vue-router'

// SHOP
import Introduction from '@/components/shop/Introduction.vue'
import Contact from '@/components/shop/contact.vue'
import Contact1 from '@/components/shop/contact1.vue'
import ImplementationProgress from '@/components/shop/ImplementationProgress.vue'

//项目实施进度查询
import TreeDocument from '@/components/shop/treedocument.vue'
import TreeDocumentS from '@/components/shop/treedocuments.vue'
import SourceChoose from '@/components/shop/sourcechoose.vue'
import SourceChooseS from '@/components/shop/sourcechooses.vue'
import Domainname from '@/components/shop/domainname.vue'
import Domainnames from '@/components/shop/domainnames.vue'
import Apireg from '@/components/shop/apireg.vue'
import Apiregs from '@/components/shop/apiregs.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'introduction',
    component: Introduction
  },
  ///////////////////////////////////////////////简介/联系/项目实施/进度查询
  {
    path: '/shop/introduction',
    name: 'Introduction',
    component: Introduction
  },

  {
    path: '/shop/contact',
    name: 'Contact',
    component: Contact
  }, {
    path: '/shop/contact1',
    name: 'Contact1',
    component: Contact1
  },
  {
    path: '/shop/implementationprogress',
    name: 'ImplementationProgress',
    component: ImplementationProgress
  },  
  ///////////////////////////////////////////////源码选定
  {
    path: '/shop/sourcechoose',
    name: 'SourceChoose',
    component: SourceChoose
  }, {
    path: '/shop/sourcechooses',
    name: 'SourceChooseS',
    component: SourceChooseS
  },
  ///////////////////////////////////////////////域名申请备案名称
  {
    path: '/shop/domainname',
    name: 'Domainname',
    component: Domainname
  },
  {
    path: '/shop/domainnames',
    name: 'Domainnames',
    component: Domainnames
  },
  ///////////////////////////////////////////////服务器购买
  ///////////////////////////////////////////////接口服务申请
  {
    path: '/shop/apireg',
    name: 'Apireg',
    component: Apireg
  }, 
  {
    path: '/shop/apiregs',
    name: 'Apiregs',
    component: Apiregs
  },
  ///////////////////////////////////////////////微信接口申请
  ///////////////////////////////////////////////商城名称
  ///////////////////////////////////////////////产品功能
  ///////////////////////////////////////////////代码部署
 
  ///////////////////////////////////////////////拓扑文档
  {
    path: '/shop/treedocument',
    name: 'TreeDocument',
    component: TreeDocument
  },
  {
    path: '/shop/treedocuments',
    name: 'TreeDocumentS',
    component: TreeDocumentS
  },
   ///////////////////////////////////////////////UI
   ///////////////////////////////////////////////前端
]

export default new VueRouter({
  routes
})