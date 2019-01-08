import Vue from 'vue'
import VueRouter from 'vue-router'

// SHOP
import Introduction from '@/components/shop/Introduction.vue'
import Contact from '@/components/shop/contact.vue'
import ImplementationProgress from '@/components/shop/ImplementationProgress.vue'
//根据项目
import StructureRecovery from '@/components/shop/structurerecovery.vue'

//项目实施进度查询

import SourceChoose from '@/components/shop/sourcechoose.vue'
import SourceChooseS from '@/components/shop/sourcechooses.vue'
import Domainname from '@/components/shop/domainname.vue'
import Domainnames from '@/components/shop/domainnames.vue'
import Apireg from '@/components/shop/apireg.vue'
import Apiregs from '@/components/shop/apiregs.vue'
import Productfunction from '@/components/shop/productfunction.vue'
import Productfunctions from '@/components/shop/productfunctions.vue'
import Deploy from '@/components/shop/deploy.vue'
import Deploys from '@/components/shop/deploys.vue'
import TreeDocument from '@/components/shop/treedocument.vue'
import TreeDocumentS from '@/components/shop/treedocuments.vue'
import Ui from '@/components/shop/ui.vue'
import Uis from '@/components/shop/uis.vue'

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
  },
  {
    path: '/shop/implementationprogress',
    name: 'ImplementationProgress',
    component: ImplementationProgress
  },
  ///////////////////////////////////////////////根据项目

  {
    path: '/shop/StructureRecovery',
    name: 'StructureRecovery',
    component: StructureRecovery
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
  ///////////////////////////////////////////////服务器购买/接口服务申请
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
  ///////////////////////////////////////////////产品功能设定

  {
    path: '/shop/productfunction',
    name: 'Productfunction',
    component: Productfunction
  }, {
    path: '/shop/productfunctions',
    name: 'Productfunctions',
    component: Productfunctions
  },
  ///////////////////////////////////////////////代码部署
  {
    path: '/shop/deploy',
    name: 'Deploy',
    component: Deploy
  }, {
    path: '/shop/deploys',
    name: 'Deploys',
    component: Deploys
  },
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
  ///////////////////////////////////////////////UI/前端
  {
    path: '/shop/ui',
    name: 'Ui',
    component: Ui
  }, {
    path: '/shop/uis',
    name: 'Uis',
    component: Uis
  },
]

export default new VueRouter({
  routes
})