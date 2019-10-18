import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import "element-ui/lib/theme-chalk/index.css";
import {
  Dialog,
  Menu,
  MenuItem,
  Input,
  Select,
  Button,
  Form,
  FormItem,
  Row,
  Col,
  Card,
  Message,
  Notification,
  MessageBox,
  Option,
  Backtop
} from "element-ui";

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
Vue.use(Backtop);

Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;

import hljs from "highlight.js/lib/highlight";
import "highlight.js/styles/atom-one-light.css";
import cpp from "highlight.js/lib/languages/cpp";
import python from "highlight.js/lib/languages/python";
import java from "highlight.js/lib/languages/java";
import js from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";

window.hljs = hljs;

hljs.registerLanguage("cpp", cpp);
hljs.registerLanguage("python", python);
hljs.registerLanguage("java", java);
hljs.registerLanguage("javascript", js);
hljs.registerLanguage("html", html);

import { appUrl } from "./config";

Vue.prototype.baseURL = appUrl;

window.copyData = function(data, t) {
  let oInput = document.createElement("textarea");
  if (t) oInput.value = data;
  else oInput.value = appUrl + data;
  document.body.appendChild(oInput);
  oInput.select();
  document.execCommand("Copy");
  oInput.style.display = "none";
};

Vue.config.productionTip = true;

new Vue({
  el: "#app",
  router,
  render: h => h(App)
}).$mount("#app");
