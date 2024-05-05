<template>
    <div class="col">
        <div class="row"><div class="col rotated">{{ props.msg }}</div></div>
    <div class="row"><div class="col cell">1</div></div>
        <div class="row"><div class="col cell">1</div></div>
        <div class="row"><div class="col cell">1</div></div>
        <div class="row"><div class="col cell">1</div></div>
        <div class="row"><div class="col cell">1</div></div>
        <div class="row"><div class="col cell">1</div></div>
        <div class="row"><div class="col cell">1</div></div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps({msg: String})
</script>

<style>
    .rotated {
        writing-mode: vertical-lr;
        transform: rotate(180deg);
    }
    .cell {
        border: solid 1px grey
    }
</style>