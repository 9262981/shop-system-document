import Vue from 'vue';
import VueRouter from 'vue-router';

// SHOP
import Introduction from '@/components/Introduction.vue';
import Contact from '@/components/contact.vue';
//根据项目
import all from '@/components/structure/all.vue';
import rsystem from '@/components/structure/rsystem.vue';
import asystem from '@/components/structure/asystem.vue';
import csystem from '@/components/structure/csystem.vue';
import tsystem from '@/components/structure/tsystem.vue';


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'introduction',
    component: Introduction
  },
  ///////////////////////////////////////////////简介/联系/项目实施/进度查询
  {
    path: '/introduction',
    name: 'Introduction',
    component: Introduction
  },

  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },

  ///////////////////////////////////////////////根据项目

  {
    path: '/structure/all',
    name: 'all',
    component: all
  },
  {
    path: '/structure/rsystem',
    name: 'rsystem',
    component: rsystem
  },
  {
    path: '/structure/asystem',
    name: 'asystem',
    component: asystem
  },
  {
    path: '/structure/csystem',
    name: 'csystem',
    component: csystem
  },
  {
    path: '/structure/tsystem',
    name: 'tsystem',
    component: tsystem
  },


]

export default new VueRouter({
  routes
})