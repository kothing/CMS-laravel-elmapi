/**
 * Admin
 * backend entry
 */
import Vue from "vue";
import axios from "axios";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import VuePagination from "laravel-vue-pagination";
import VCalendar from "v-calendar";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Slugify from "./backend/plugins/slugify";

import "./backend/plugins/colorpicker";
import "./backend/utils/directives";
import "./backend/utils/filters";

// Routes
import router from "./backend/routes";

// Store
import store from "./backend/store";

/**
 * Axios middleware
 */
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

const ToastInsance = Toast.createToastInterface({
  draggable: false,
  timeout: 2000,
  pauseOnFocusLoss: false,
  position: "top-center",
});

NProgress.configure({ showSpinner: false });

window.axios.interceptors.request.use(
  (config) => {
    NProgress.start();
    return config;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(error);
  }
);

window.axios.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.reload();
    } else if (error.response && error.response.status === 403) {
      ToastInsance.error(error.response.data.message);
    } else if (error.response && error.response.status === 404) {
      ToastInsance.error("Record not found!");
    } else if (error.response && error.response.status === 419) {
      window.location.reload();
    } else if (error.response && error.response.status === 422) {
      //
    } else {
      ToastInsance.error("An unexpected error occurred!");
    }

    NProgress.done();

    return Promise.reject(error);
  }
);

// Toast
Vue.use(Toast, {
  draggable: false,
  timeout: 2000,
  pauseOnFocusLoss: false,
  position: "top-center",
});

// VCalendar
Vue.use(VCalendar, {
  componentPrefix: "v",
});

// Pagination
Vue.component("pagination", VuePagination);

// vSelect
Vue.component("v-select", vSelect);

// VueSweetalert2
Vue.use(VueSweetalert2, {
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, I am sure!",
  type: "warning",
  icon: "warning",
});

// Slugify
Vue.use(Slugify);

// Admin
Vue.component("admin", require("./backend/Admin.vue").default);

/**
 * Render
 */
new Vue({
  el: "#admin",
  router,
  store,
});
