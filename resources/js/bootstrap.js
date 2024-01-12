/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// VueToast
const VueToast = require('vue-toastification');
const Toast = VueToast.createToastInterface({
	draggable: false,
	timeout: 2000,
	pauseOnFocusLoss: false,
	position: "top-center"
});

// NProgress
const NProgress = require('nprogress');
NProgress.configure({ 
    showSpinner: false
});

window.axios.interceptors.request.use(config => {
    NProgress.start()
    return config
}, (error) => {
    NProgress.done();
    return Promise.reject(error);
});
  
window.axios.interceptors.response.use(response => {
    NProgress.done()
    return response
}, (error) => {
    if(error.response &&  error.response.status === 401){
        window.location.reload();
    } else if(error.response && error.response.status === 403){
        Toast.error(error.response.data.message);
    } else if(error.response &&  error.response.status === 404){
        Toast.error("Record not found!");
    } else if(error.response &&  error.response.status === 419){
        window.location.reload();
    } else if(error.response &&  error.response.status === 422){
        //
    } else {
        Toast.error("An unexpected error occurred!");
    }
    
    NProgress.done();

    return Promise.reject(error);
});
