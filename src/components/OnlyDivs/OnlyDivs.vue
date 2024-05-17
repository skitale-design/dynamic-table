<template>
    <div class="cell" @click="move()">cell</div>
</template>

<script setup>
    import {ref} from 'vue';
    const top = ref(100);
    function move() { top.value = top.value + 100}
</script>

<style>
    .cell {
        position: absolute;
        top: v-bind(top + 'px');
        left: 100px;
        width: 100px;
        height: 80px;
        background-color: rgb(199, 184, 165);
    }
</style>