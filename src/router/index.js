import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  // { path: '/', component: () => import('@/views/dashboard/index'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'route.dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/terminal',
    component: Layout,
    redirect: 'noredirect',
    name: '终端业务',
    icon: 'table',
    children: [
      { path: 'terminal_sim', component: () => import('@/views/terminal/terminal_sim/index'), name: '活跃终端管理' },

      { path: 'terminal', component: () => import('@/views/terminal/terminal/index'), name: '终端信息管理' },

      { path: 'terminal_version', component: () => import('@/views/terminal/terminal_version/index'), name: '终端升级管理' },
      { path: 'terminal_version/new', component: () => import('@/views/terminal/terminal_version/new'), name: '终端升级新增', hidden: true  },

      { path: 'flow_balance', component: () => import('@/views/terminal/flow_balance/index'), name: '终端流量管理' },
      { path: 'flow_balance/new', component: () => import('@/views/terminal/flow_balance/new'), name: '终端流量新增', hidden: true  },
      { path: 'flow_balance/edit/:id', component: () =>import('@/views/terminal/flow_balance/edit'), name: '终端流量编辑', hidden: true  },
    ]
  },

  {
    path: '/operation',
    component: Layout,
    redirect: 'noredirect',
    name: '运营管理',
    icon: 'table',
    children: [
      { path: 'country', component: () => import('@/views/operation/country/index'), name: '国家管理' },
      { path: 'country/new', component: () => import('@/views/operation/country/new'), name: '国家新增', hidden: true  },
      { path: 'country/edit/:id', component: () =>import('@/views/operation/country/edit'), name: '国家编辑', hidden: true  },

      { path: 'operator', component: () => import('@/views/operation/operator/index'), name: '运营商管理' },
      { path: 'operator/new', component: () => import('@/views/operation/operator/new'), name: '运营商新增', hidden: true  },
      { path: 'operator/edit/:id', component: () =>import('@/views/operation/operator/edit'), name: '运营商编辑', hidden: true  },

      { path: 'country_operator', component: () => import('@/views/operation/country_operator/index'), name: '运营商支持国家管理' },
      { path: 'country_operator/new', component: () => import('@/views/operation/country_operator/new'), name: '运营商支持国家新增', hidden: true  },

      { path: 'operator_prefer', component: () => import('@/views/operation/operator_prefer/index'), name: 'PLMN配置管理' },
      { path: 'operator_prefer/new', component: () => import('@/views/operation/operator_prefer/new'), name: 'PLMN配置新增', hidden: true  },
      { path: 'operator_prefer/edit/:id', component: () =>import('@/views/operation/operator_prefer/edit'), name: 'PLMN配置编辑', hidden: true  },

      { path: 'used_net', component: () => import('@/views/operation/used_net/index'), name: '接入网络配置管理' },
      { path: 'used_net/new', component: () => import('@/views/operation/used_net/new'), name: '接入网络配置新增', hidden: true  },
      { path: 'used_net/edit/:id', component: () =>import('@/views/operation/used_net/edit'), name: '接入网络配置编辑', hidden: true  },
    ]
  },

  {
    path: '/sim_card',
    component: Layout,
    redirect: 'noredirect',
    name: '主卡业务',
    icon: 'table',
    children: [
      { path: 'simpool', component: () => import('@/views/sim_card/simpool/index'), name: '卡池管理' },
      { path: 'simpool/show/:id', component: () =>import('@/views/sim_card/simpool/show'), name: '卡池查看', hidden: true  },

      { path: 'sim_card', component: () => import('@/views/sim_card/sim_card/index'), name: '主卡信息管理' },
      { path: 'sim_card/new', component: () => import('@/views/sim_card/sim_card/new'), name: '主卡信息新增', hidden: true  },
      { path: 'sim_card/edit/:id', component: () => import('@/views/sim_card/sim_card/edit'), name: '主卡信息编辑', hidden: true  },

      { path: 'simpackage', component: () => import('@/views/sim_card/simpackage/index'), name: '流量套餐管理' },
      { path: 'simpackage/new', component: () => import('@/views/sim_card/simpackage/new'), name: '流量套餐新增', hidden: true  },
      { path: 'simpackage/edit/:id', component: () =>import('@/views/sim_card/simpackage/edit'), name: '流量套餐编辑', hidden: true  },

      { path: 'ready_terminal_sim', component: () => import('@/views/sim_card/ready_terminal_sim/index'), name: '预置主卡管理' },
      { path: 'ready_terminal_sim/new', component: () => import('@/views/sim_card/ready_terminal_sim/new'), name: '预置主卡新增', hidden: true  },
    ]
  },

  {
    path: '/channel_card',
    component: Layout,
    redirect: 'noredirect',
    name: '副卡业务',
    icon: 'table',
    children: [
      { path: 'channel_card', component: () => import('@/views/channel_card/channel_card/index'), name: '副卡信息管理' },

      { path: 'terminal_channel', component: () => import('@/views/channel_card/terminal_channel/index'), name: '副卡配置管理' },
      { path: 'terminal_channel/new', component: () => import('@/views/channel_card/terminal_channel/new'), name: '副卡配置新增', hidden: true  },

      { path: 'channel_card_prefer', component: () => import('@/views/channel_card/channel_card_prefer/index'), name: '副卡PLMN配置管理' },
      { path: 'channel_card_prefer/new', component: () => import('@/views/channel_card/channel_card_prefer/new'), name: '副卡PLMN配置新增', hidden: true  },
      { path: 'channel_card_prefer/edit/:id', component: () =>import('@/views/channel_card/channel_card_prefer/edit'), name: '副卡PLMN配置编辑', hidden: true  },
    ]
  },

  {
    path: '/customer',
    component: Layout,
    redirect: 'noredirect',
    name: '客户信息管理',
    icon: 'table',
    children: [
      { path: 'customer', component: () => import('@/views/customer/customer/index'), name: '客户管理' },
      { path: 'customer/new', component: () => import('@/views/customer/customer/new'), name: '客户新增', hidden: true  },
      { path: 'customer/edit/:id', component: () =>import('@/views/customer/customer/edit'), name: '客户编辑', hidden: true  },

      { path: 'balance', component: () => import('@/views/customer/balance/index'), name: '客户账户管理' },
      { path: 'balance/edit/:id', component: () => import('@/views/customer/balance/edit'), name: '客户账户编辑', hidden: true  },

      { path: 'country_price', component: () => import('@/views/customer/country_price/index'), name: '价格管理' },
      { path: 'country_price/new', component: () => import('@/views/customer/country_price/new'), name: '价格新增', hidden: true  },
      { path: 'country_price/edit/:id', component: () =>import('@/views/customer/country_price/edit'), name: '价格编辑', hidden: true  },

      { path: 'order', component: () => import('@/views/customer/order/index'), name: '客户行程订单' },
      { path: 'order/show/:id', component: () =>import('@/views/customer/order/show'), name: '查看行程', hidden: true  },
    ]
  },

  {
    path: '/auth_role',
    component: Layout,
    redirect: 'noredirect',
    name: '系统管理',
    icon: 'table',
    children: [
      { path: 'auth_user', component: () => import('@/views/auth_role/auth_user/index'), name: '账号管理' },
      { path: 'auth_user/new', component: () => import('@/views/auth_role/auth_user/new'), name: '客户新增', hidden: true  },
      { path: 'auth_user/edit/:id', component: () =>import('@/views/auth_role/auth_user/edit'), name: '客户编辑', hidden: true  },
      { path: 'auth_user/role/:id', component: () =>import('@/views/auth_role/auth_user/role'), name: '客户权限', hidden: true  },

      { path: 'auth_role', component: () => import('@/views/auth_role/auth_role/index'), name: '权限管理' },
      { path: 'auth_role/new', component: () => import('@/views/auth_role/auth_role/new'), name: '权限新增', hidden: true  },
      { path: 'auth_role/edit/:id', component: () =>import('@/views/auth_role/auth_role/edit'), name: '权限编辑', hidden: true  },


      { path: 'auth_permission', component: () => import('@/views/auth_role/auth_permission/index'), name: '接口管理' },
      { path: 'auth_permission/new', component: () => import('@/views/auth_role/auth_permission/new'), name: '接口新增', hidden: true  },
      { path: 'auth_permission/edit/:id', component: () =>import('@/views/auth_role/auth_permission/edit'), name: '接口编辑', hidden: true  },
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
