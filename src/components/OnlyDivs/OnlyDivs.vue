<template>
    <div :class="props.class" @click="oneClick()">{{ msg }}</div>
</template>

<script setup>
    import {ref,defineProps} from 'vue'
    import {state} from '../StateStore.js' 

    console.log(state)


    const props = defineProps({
        color: {type: String, default: "red"},
        class:{type: String,default:"cell"},
        msg:{type: String,default: "default"},
        top: {type: Number, default: 10},
        left: {type: Number, default: 10},
        height: {type: Number,default: 50}
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
                SingleClickAction()
                clicks.value = 0
            }, delay.value);
        } else {
            clearTimeout(timer.value);
            DoubleClickAction()
            clicks.value = 0;
        }
    }

    function SingleClickAction(){
        console.log("singleClickAction")
        left.value = left.value + 100;
    }

    function DoubleClickAction(){
        top.value = top.value + 100
    }

</script>

<style>
    .cell {
        position: absolute;
        top: v-bind(top + 'px');
        left: v-bind(left + 'px');
        width: 100px;
        height: v-bind(props.height+'px');
        background-color: v-bind(props.color);
    }

    .head {
        position: absolute;
        top: v-bind(top + 'px');
        left: v-bind(left + 'px');
        width: 100px;
        height: v-bind(props.height+'px');
        background-color: v-bind(props.color);
    }
</style>