<template>
    <div class="row">
        <SummColumn></SummColumn>
        <MainColumn></MainColumn>
    </div>
</template>

<script>
    import SummColumn from './SummColumn.vue'
    import MainColumn from './MainColumn/TheIndex.vue'

    export default {
        name: 'SystemElement',
        components: {
            SummColumn,MainColumn
        }
    }

</script>