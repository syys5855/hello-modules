import Vue from 'vue';
import store from './store';
import App from './component/app.vue';

let app = new Vue({
    el: '#app',
    store,
    components: {
        App
    }
});
window.app = app;