import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'

import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/atom-one-light.css';
import cpp from 'highlight.js/lib/languages/cpp';
import python from 'highlight.js/lib/languages/python';
import java from 'highlight.js/lib/languages/java';

window.hljs = hljs;

hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('python', python);
hljs.registerLanguage('java', java);

var axios_instance = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {'Content-Type':'application/x-www-form-urlencoded'}
});

Vue.prototype.router = router;
Vue.prototype.axios = axios_instance;
Vue.prototype.server = "http://localhost:5000";

window.copyUrl = function(url){
  let oInput = document.createElement('input');
  oInput.value = "localhost:8080/#/" + url;
  document.body.appendChild(oInput);
  oInput.select();
  document.execCommand("Copy");
  oInput.style.display='none';
};

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  el: "#app",
  router,
  render: h => h(App),
}).$mount('#app')
