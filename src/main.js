import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from "./components/HelloWorld.vue"
import HelloCool from "./components/HelloCool.vue"
Vue.config.productionTip = false
Vue.use(VueRouter)
const router=new VueRouter({
  routes:[
    {path:'/hello',component:HelloWorld,
     children:[{path:'cool',component:HelloCool}]
  
  }

  ]
});
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
