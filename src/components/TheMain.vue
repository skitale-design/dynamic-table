<!-- <template>
    <div class="row">
        <div class="col">
            <h1>Динамическая таблица</h1>
        </div>
    </div>
</template> -->

<!-- <template>
    <cell/>
    <cell/>
    <cell/>
    <cell/>
</template>  -->

<template>
    <div class="container">
        <div class="block">....</div>
        <div class="block header">header</div>
        <div class="block sidebar">sidebar</div>
        <div class="block header">header</div>
        <div class="block cell">cell</div>
        <div class="block cell">cell</div>
        <div class="block cell">cell</div>
    </div>
</template>

<script setup>
    // import cell  from "./ACell.vue";
    // import RoleAndContent from "./RoleAndContent.vue";


</script>

<style>
.container {
    display: grid;
    /* grid-template-columns: repeat(4, 80px); */
    grid-template-columns: 300px 80px auto 80px;
    /* grid-template-rows: 200px 80px; */
    grid-gap: 3px;
    grid-template-areas:
    ". header header"
    "sidebar cell cell";
}
    .block {
        background-color: rgb(173, 173, 255);
    }

    .cell {
        background-color: rgb(116, 116, 250);
        grid-area: cell;
    }

    .header {
        grid-area: header;
    }

    .sidebar{
        grid-area: sidebar;
    }

    .main{
        grid-area: main;
    }

    .red {
        height: 80px;
        background-color: rgb(255, 167, 167);
    }
</style>