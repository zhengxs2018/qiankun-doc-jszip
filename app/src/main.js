import "./public-path";

import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;

const createApp = () => {
  return new Vue({
    render: (h) => h(App),
  });
};

if (!window.__POWERED_BY_QIANKUN__) {
  createApp().$mount("#app");
}

export async function bootstrap() {}

export async function mount({ container }) {
  const app = createApp();

  app.$mount(container.querySelector("#app"));
}

export async function unmount() {}
