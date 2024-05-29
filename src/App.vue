<template>
  <div>
    <span>{{ `>>>> [${console.log(`>>>> [${state.SysIds.value}]`)}]` }}</span>
    <div v-for="u in users.jsondata" :key="u.id">
      <div> {{ `${u.id}_${console.log(`>>>> u.id : [${u.id}]`)}` }}</div>
      <div v-for="s in u.system " :key="s.id" >
        <span>{{ `${console.log(`>>> [${state.SysIds.value}].includes(${s.id}): ${state.SysIds.value.includes(s.id)}`)}` }}</span>
        <div v-if="!state.SysIds.value.includes(s.id)" >
          <OnlyDivs :msg="s.name" :top="0" :left="s.id*100" :id="s.id" color="#98cbff" :type=s.type ref="system" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import users from "./data/users.json";
  import OnlyDivs from "./components/OnlyDivs/OnlyDivs.vue";
  import {state} from './components/StateStore.js' 
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
.red {background-color: rgb(255, 186, 186);}
.blue {background-color: rgb(184, 207, 255);}
.green {background-color: rgb(175, 255, 164);}
.grey {background-color: rgb(202, 202, 202);}
.purple {background-color: rgb(229, 190, 255);}
.yellow {background-color: rgb(223, 213, 155);}
</style>
