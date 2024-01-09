
import Vue from 'vue'
import "@fortawesome/fontawesome-free/css/all.min.css";
import VCalendar from 'v-calendar';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import './directives'
import './filters'
import './plugins/colorpicker'

window.axios = require('axios');
window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').content
};

// elmapiForm
Vue.component('elmapiForm', require('./layouts/Form.vue').default);

// VCalendar
Vue.use(VCalendar, {
	componentPrefix: 'v',
});

// vSelect
Vue.component('v-select', vSelect)

const form = new Vue({
    el: '#elmapiForm',
});
