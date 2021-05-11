import Vue from "vue";
// import hljs from "highlight.js";
import "github-markdown-css";
import "highlight.js/styles/atom-one-light.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
