<template>
    <div class="wrapper">
        <div :class="props.class" @click="oneClick()">{{ msg }}</div>
    </div>
</template>

<script setup>
    import {ref,defineProps} from 'vue'
    import {state} from '../StateStore.js' 

    const props = defineProps({
        color: {type: String, default: "gray"},
        class:{type: String,default:"cell"},
        msg:{type: String,default: "default"},
        top: {type: Number, default: 10},
        left: {type: Number, default: 10},
        id: {type: Number, default: null},
        type: {type: String, default: "cell"},
        height: {type: Number,default: 90}
    })
    const top = ref(props.top)
    const left = ref(props.left)
    const fontWeight = ref(state.fontWeight.weight)
    const color = ref(props.color)

    console.log(`------------- OnlyDivs: ${props.id}, ${props.type}, ${props.msg}`)
    console.log(`[${state.SysIds.value}].includes(${props.id}) = ${state.SysIds.value.includes(props.id)}`)
    console.log(`props.id = ${props.id}`)


    if (props.type === "system") {
        if(!state.SysIds.value.includes(props.id)){
            console.log(`state.SysIds.value = [${state.SysIds.value}]`) //for debugging
                state.SysIds.value.push(props.id)
                console.log(`state.SysIds.value = [${state.SysIds.value}]`) //for debugging
            }

    }


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
        console.log("singleClickActio()")
        left.value = left.value + 100
    }

    function DoubleClickAction(){
        clearSelection()
        state.currentId.id = props.id
        state.fontWeight.bool = !state.fontWeight.bool
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

<style scoped>

    .wrapper{
        --top:v-bind(top + 'px');
        --left:v-bind(left + 'px');
        --height:v-bind(props.height + 'px');
        --mycolor: v-bind(color);
        --fontWeight: v-bind((id == state.currentId.id)?fontWeight:"normal")
    }

    .cell {
        position: absolute;
        top: var(--top);
        left: var(--left);
        width: 100px;
        height: var(--height);
        background-color: var(--mycolor);
        font-weight: var(--fontWeight) 
        
    }

    .head {
        position: absolute;
        top: var(--top);
        left: var(--left);
        width: 100px;
        height: var(--height);
        background-color: var(--mycolor);
    }
</style>