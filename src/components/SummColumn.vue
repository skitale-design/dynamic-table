<template>
    <div class="col-1 blue">
        <div class="row">
            <div class="col rotated">Система 1</div>
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

<style>
    .rotated {
        writing-mode: vertical-lr;
        transform: rotate(180deg);
    }

    .cell {
        border: solid 1px grey
    }
</style>