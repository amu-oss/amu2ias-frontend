import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Chat from '@/components/Chat'
import About from '@/components/About'
import Fame from '@/components/Fame'
import Account from '@/components/Account'
import Blog from '@/components/Blog'
import Downloads from '@/components/Downloads'
import Signin from '@/components/Signin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AMU2IAS',
      component: Home
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
      name: 'Hall of Fame',
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
      component: Home
    },
    {
      path: '/signin',
      name: 'Sign In',
      component: Signin
    }
  ]
})
