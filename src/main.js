import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.use(ElementUI);

var axios_instance = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {'Content-Type':'application/x-www-form-urlencoded'}
});

Vue.prototype.router = router;
Vue.prototype.axios = axios_instance;
Vue.prototype.server = "http://localhost:5000";

Vue.config.productionTip = false

new Vue({
  el: "#app",
  router,
  render: h => h(App),
}).$mount('#app')
