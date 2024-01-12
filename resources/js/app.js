import Vue from 'vue';
import router from './routes';
import store from './store';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "nprogress/nprogress.css";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import VCalendar from 'v-calendar';

import Slugify from './plugins/slugify';

import './plugins/colorpicker'
import './directives'
import './filters'

// Toast
const toastOptions = {
	draggable: false,
	timeout: 2000,
	pauseOnFocusLoss: false,
	position: "top-center"
};
Vue.use(Toast, toastOptions);


// Slugify
Vue.use(Slugify);

// VCalendar
Vue.use(VCalendar, {
	componentPrefix: 'v',
});

// Pagination
Vue.component('pagination', require('laravel-vue-pagination'));

// vSelect
Vue.component('v-select', vSelect)

// VueSweetalert2
const sweetalert2Options = {
	showCancelButton: true,
	confirmButtonColor: '#3085d6',
	cancelButtonColor: '#d33',
	confirmButtonText: 'Yes, I am sure!',
	type: 'warning',
	icon: 'warning',
};
Vue.use(VueSweetalert2, sweetalert2Options);

// app
Vue.component('app', require('./layouts/App.vue').default);

const app = new Vue({
    el: '#admin-app',
    router,
	store
});
