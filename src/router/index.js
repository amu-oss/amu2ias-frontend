import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Chat from '@/components/Chat'
import About from '@/components/About'
import Fame from '@/components/Fame'
import Account from '@/components/Account'
import Blog from '@/components/Blog'
import Downloads from '@/components/Downloads'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/fame',
      name: 'Fame',
      component: Fame
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/downloads',
      name: 'Downloads',
      component: Downloads
    },
    {
      path: '/home',
      name: 'Home',
      component: Hello
    }
  ]
})
