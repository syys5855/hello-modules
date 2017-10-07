<template>
    <div>
        <h1>hello world</h1>
        <div class="panel panel-primary">
            <div class="panel-body">
                <div class="btn-group">
                    <button class="btn btn-primary" @click="increase({num:1})">
                        anniu
                    </button>
                    <button class="btn btn-default" @click="add({num:2})">
                        action add
                    </button>

                    <button @click="clickAdd">add</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
export default {
    methods: {
        clickAdd() {
            console.log('addd a a ');
        },
        ...mapMutations({
            increase(f, params) {
                f('a/increase', params);
                // console.log(params);
            }
        }),
        ...mapActions({
            add(f, params) {

                f('b/add', params);
                // console.log(params)
            }
        })

    }
}
</script>

<style>

</style>
