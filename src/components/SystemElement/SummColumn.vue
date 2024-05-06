<template>
    <div class="col-1 blue" :class="{hidden:state.summCol.hidden == true}">
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
    import { state } from '../StateStore.js';

    function hide() {
        state.mainCol.hidden = false;
        state.summCol.hidden = true;
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