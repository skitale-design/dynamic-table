<template>
  <div>
    <div v-for="el in data" :key="el.id">
      <OnlyDivs :msg=el.value class="cell" color="rgb(255, 177, 177)" :top=100+el.value />
    </div>
  </div>
</template>

<script setup>
// import {ref} from 'vue'
import data from "./data/data.json";
//import TheMain from './components/TheMain.vue'
 //import SystemElement from './components/SystemElement/TheIndex.vue'
import OnlyDivs from './components/OnlyDivs/OnlyDivs.vue'
// const elements = ref([100,200,300,400,500,600])
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .red {background-color: rgb(255, 177, 177);}
  .blue {background-color: rgb(184, 207, 255);}
  .green {background-color: rgb(175, 255, 164);}
  .grey {background-color: rgb(202, 202, 202);}
  .purple {background-color: rgb(229, 190, 255);}
  .yellow {background-color: rgb(223, 213, 155);}
  
</style>
