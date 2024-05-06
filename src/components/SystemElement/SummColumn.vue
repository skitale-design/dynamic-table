<template>
    <div class="col-1 blue" :class="{hidden:hidden == true}">
        <div class="row">
            <div class="col rotated" @click="hide()">Система 1</div>
        </div>
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
    import {ref} from 'vue'
    //import RoleAndContent from "./RoleAndContent.vue";

    const hidden = ref(false);
    
    function hide() {
        console.log("hide");
        hidden.value = !hidden.value;
    }
</script>

<style>
    .rotated {
        writing-mode: vertical-lr;
        transform: rotate(180deg);
    }

    .cell {
        border: solid 1px grey
    }

    .hidden{
        display: none;
    }
</style>