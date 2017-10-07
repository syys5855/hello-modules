<template>
    <div>
        <h1 class="text-success">
            {{countA}}
        </h1>
        <h1 class="text-danger">
            {{countB}}
        </h1>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            countA: 'a/count'
        }),
        ...mapState({
            countB(state, getters) {
                // 与一个模块类似的参数 
                console.log(state, getters)
                return state.b.count;
            }
        }),
        // countA() {
        //     return this.$store.getters['a/count'];
        // },
        // countB() {
        //     return this.$store.state.b.count;
        // }
    }
}
</script>

<style>

</style>
