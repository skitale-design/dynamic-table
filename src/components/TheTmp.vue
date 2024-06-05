<template> 
    <div>
        <div class="tmp">{{ ` **** ${console.log(`***** ${props.id} `)}`}}</div>
    </div>
</template>

<script setup>
    import {defineProps,defineEmits} from 'vue'
    const props = defineProps({        msg: {type: String, default: "tmp"},        id: {type: Number, default: null}    })
    const emits = defineEmits(['push'])
    emits('push',props.id)
    console.log(`TheTmp >> props.id:${props.id}`)


</script>

<style scoped>
    .tmp{
        background-color: rgb(255, 177, 177);
        color: white;
    }
</style>