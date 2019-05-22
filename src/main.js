import Vue from 'vue'
import axios from 'axios'

import App from './App.vue'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css'
// import ElementUI from 'element-ui'
import { 
  Dialog, Menu, MenuItem, Input, Select, Button, Form, FormItem, Row, Col, Card, Message, Notification, MessageBox, Option
} from 'element-ui'

// Vue.use(ElementUI);

Vue.use(Dialog);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Option);

Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;

import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/atom-one-light.css';
import cpp from 'highlight.js/lib/languages/cpp';
import python from 'highlight.js/lib/languages/python';
import java from 'highlight.js/lib/languages/java';
import js from 'highlight.js/lib/languages/javascript'
import html from 'highlight.js/lib/languages/xml'

window.hljs = hljs;

hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('python', python);
hljs.registerLanguage('java', java);
hljs.registerLanguage('javascript', js);
hljs.registerLanguage('html', html);

const DEBUG = false;
var server_url, app_url;
if (!DEBUG) {
  server_url = "https://xlorpaste.cn/api/";
  app_url = "https://xlorpaste.cn/";
} else {
  server_url = "http://localhost:5000/api/";
  app_url = "http://localhost:8080/";
}

// Vue.prototype.router = router;
Vue.prototype.axios = axios.create({
  baseURL: server_url,
  headers: {'Content-Type':'application/x-www-form-urlencoded'}
});
Vue.prototype.baseURL = app_url;

window.copyData = function(data, t){
  let oInput = document.createElement('textarea');
  if (t) oInput.value = data
  else oInput.value = app_url + data;
  document.body.appendChild(oInput);
  oInput.select();
  document.execCommand("Copy");
  oInput.style.display='none';
};

Vue.config.productionTip = true;

new Vue({
  el: "#app",
  router,
  render: h => h(App),
}).$mount('#app')
