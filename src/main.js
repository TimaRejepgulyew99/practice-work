import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import profile from './components/profile'
import main from './components/main'
import news from './components/news'
import login from './components/login'
import store from './store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter)


const router = new VueRouter({

  mode: 'history',
  routes: [

    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
      meta: { requireAuth: localStorage.getItem('authUser') }
    },
    {
      path: '/login',
      name: 'login',
      component: login

    },
    {
      path: '/',
      name: 'main',
      component: main,
    },


  ]
})
router.beforeEach((to, from, next) => {
  
  if(to.name == 'profile'){
    console.log('true');
    if(store.getters.authUser =='false'){
      next('/login')
    }
    else{
      next(true)
    }
  }
  else{
    next(true)
  }
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
