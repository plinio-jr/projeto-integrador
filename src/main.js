import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'


import PaginaUm from './pages/PaginaUm'
import PaginaDois from './pages/PaginaDois'
import PaginaTres from './pages/PaginaTres'
import PaginaQuatro from './pages/PaginaQuatro'
import PaginaCinco from './pages/PaginaCinco'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes:[
    {path:'/login', component: PaginaUm},
    {path:'/p2', component : PaginaDois},
    {path:'/nova-noticia', component: PaginaTres},
    {path:'/sobre', component: PaginaQuatro},
    {path:'/home', component: PaginaCinco},
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
