<template>
    <div :class="props.class" @click="oneClick()">{{ msg }}</div>
</template>

<script setup>
    import {ref,defineProps} from 'vue'

    const props = defineProps({
        color: {
            type: String,
            default: "red"
        },
        class:{
            type: String,
            default:"cell"
        },
        msg:{
            type: String,
            default: "default"
        },
        top: {
            type: String,
            default: "10"
        },
        left: {
            type: String,
            default: "10"
        }
    })
    const top = ref(props.top)
    const left = ref(props.left)

    const delay = ref(300)
    const clicks = ref(0)
    const timer = ref(null)

    function oneClick(){
        clicks.value++;
        if (clicks.value === 1) {
            timer.value = setTimeout(() => {
                left.value = left.value + 100; // сдвинуть вправо на 100 пикселей // test git
                clicks.value = 0
            }, delay.value);
        } else {
            clearTimeout(timer.value);
            top.value = top.value + 100 // сдвинуть вниз на 100 пикселей
            clicks.value = 0;
        }
    }

</script>

<style>
    .cell {
        position: absolute;
        top: v-bind(top + 'px');
        left: v-bind(left + 'px');
        width: 100px;
        height: 80px;
        background-color: v-bind(props.color);
    }

    .name {
        position: absolute;
        top: v-bind(top + 'px');
        left: v-bind(left + 'px');
        width: 100px;
        height: 80px;
        background-color: v-bind(props.color);
    }
</style>