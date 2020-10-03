import Vue from 'vue'
import App from './App.vue'
import headroom from 'vue-headroom'

Vue.config.productionTip = false
Vue.use(headroom)

new Vue({
  render: h => h(App),
}).$mount('#app')