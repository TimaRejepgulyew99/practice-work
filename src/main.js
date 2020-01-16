import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import createTasks from './components/createTasks'
import myTasks from './components/myTasks'
import moreAbout from './components/more-about'
import store from './store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 
Vue.use(VueRouter)
  const router = new VueRouter({
    mode:'history',
    routes: [
      {
        path: '/',
        name: 'my-tasks',
        component: myTasks
      },
      {
        path: '/create-tasks',
        name: 'create-tasks',
        component: createTasks,
      },
      {
        path: '/more-about/:taskId',
        name: 'more-about',
        component: moreAbout
      },
    ]
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
