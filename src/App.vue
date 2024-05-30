<template>
  <div>
    <div v-for="u in json" :key="u.id">
      <div v-for="s in u.system " :key="s.id" >
        <!-- <span>{{ `${console.log(`>>> [${ids}].includes(${s.id}): ${ids.includes(s.id)}`)}` }}</span> -->
        <div v-if="!ids.includes(s.id)" >
            <span>{{ ids.push(s.id) }}</span>
            PUSH {{ s.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  // import {reactive} from 'vue'
  import users from "./data/users.json";
  // import OnlyDivs from "./components/OnlyDivs/OnlyDivs.vue";
  //import {state} from './components/StateStore.js' 

  const json = users.jsondata.map(user => ({
  ...user, 
  system: user.system.map(system => ({
    ...system,
    role: system.role.map(role => ({
      ...role
    }))
  }))
}))

const ids = [] //state.SysIds.value

// console.log([...new Set(json.flatMap(x=>x.system.map(x=>x.id)))]) // [1,2] - список уникальных id систем


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
