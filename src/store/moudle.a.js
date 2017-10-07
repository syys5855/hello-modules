export default {
    state: {
        name: 'moudleA',
        count: 0,
    },
    getters: {
        count(state, getters, rootState) {
            return state.count - rootState.count;
        }
    },
    mutations: {
        increase(state, { num }) {
            state.count += num;
            console.log('Module a exec');
        }
    }
}