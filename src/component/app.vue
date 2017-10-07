<template>
    <div class="container">
        <ul class="list-group">
            <li class="list-group-item list-group-item-success">
                <hello></hello>
            </li>
            <li class="list-group-item list-group-item-danger">
                <count></count>
            </li>
        </ul>
    </div>
</template>

<script>
import Hello from './hello.vue';
import Count from './count.vue';

export default {
    components: {
        Hello,
        Count
    }
}
</script>

<style>

</style>
