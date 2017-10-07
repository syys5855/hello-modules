export default {
    namespaced: true,
    state: {
        name: 'moudle B',
        count: 2
    },
    getters: {
        count(state, getters, rootState) {
            return state.count + rootState.count;
        }
    },
    mutations: {
        increase(state, { num }) {
            state.count += 3 * num;
            console.log('module b exec');
        }
    },
    actions: {
        add({ commit }, params) {
            commit('increase', params);
        }
    }
}