/**
 * Backend admin entry
 */
import Vue from "vue";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import VuePagination from "laravel-vue-pagination";
import VCalendar from "v-calendar";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "nprogress/nprogress.css";

import Slugify from "./plugins/slugify";

import "./plugins/colorpicker";
import "./utils/directives";
import "./utils/filters";

// Routes
import router from "./backend/routes";

// Store
import store from "./backend/store";

/**
 * Axios middleware
 */
import "./bootstrap";

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
