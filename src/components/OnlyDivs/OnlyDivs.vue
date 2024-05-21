<template>
    <div class="wrapper">
        <div :class="props.class" @click="oneClick()">{{ msg }}</div>
    </div>
</template>

<script setup>
    import {ref,defineProps} from 'vue'
    import {state} from '../StateStore.js' 

    console.log(state.fontColor.red)

    const props = defineProps({
        color: {type: String, default: "red"},
        class:{type: String,default:"cell"},
        msg:{type: String,default: "default"},
        top: {type: Number, default: 10},
        left: {type: Number, default: 10},
        id: {type: Number, default: null},
        height: {type: Number,default: 50}
    })
    const top = ref(props.top)
    const left = ref(props.left)
    const fontColor = ref(state.fontColor.color)

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
        clearSelection()
        state.currentId.id = props.id
        // console.log(`state.currentId.id = ${state.currentId.id}`) //for debugging
        state.fontColor.red = !state.fontColor.red
    }


    function clearSelection() {
            if (document.selection && document.selection.empty) {
                document.selection.empty();
            } else if (window.getSelection) {
                const sel = window.getSelection();
                sel.removeAllRanges();
            }
        }


</script>

<style>

    .wrapper{
        --top:v-bind(top + 'px');
        --left:v-bind(left + 'px');
        --height:v-bind(props.height + 'px');
        --color: v-bind(props.color);
        --fontColor: v-bind((id == state.currentId.id)?fontColor:"auto")
    }

    .cell {
        position: absolute;
        top: var(--top);
        left: var(--left);
        width: 100px;
        height: var(--height);
        background-color: var(--color);
        color: var(--fontColor)
    }

    .head {
        position: absolute;
        top: var(--top);
        left: var(--left);
        width: 100px;
        height: var(--height);
        background-color: var(--color);
    }
</style>