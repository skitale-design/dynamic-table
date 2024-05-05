<template>
    <div class="col grey">
        <div class="row">
            <div class="col">
                <div class="row"><div class="col">Система 1</div></div>
                <div class="row">
                   <RoleAndContent/>
                   <RoleAndContent/>
                   <RoleAndContent/>
                   <RoleAndContent/>
                   <RoleAndContent/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import RoleAndContent from '../RoleAndContent.vue'
    export default {
        name: 'MainColumn',
        components: {
            RoleAndContent
        }
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
</style>