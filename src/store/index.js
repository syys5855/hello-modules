import Vuex from 'vuex';
import Vue from 'vue';
import moduleA from './moudle.a.js';
import moduleB from './moudle.b.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 10
    },
    modules: {
        a: {
            namespaced: true,
            ...moduleA
        },
        b: moduleB
    }
});