<template>
  <div>
    <div v-for="u in users.jsondata" :key="u.id">
      <OnlyDivs :msg="u.name" :top=u.id*100 />
      <div v-for="s in u.system " :key="s.id">
        <OnlyDivs :msg="s.name" :top="0" :left="s.id*100"/>
        <div v-for="r in s.role " :key="r.id">
          <OnlyDivs :msg="r.name" :top="50" :left="r.id*100" :height="50" color="yellow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import users from "./data/users.json";
  import OnlyDivs from "./components/OnlyDivs/OnlyDivs.vue";
  // function ObjectToColor(obj){
  //     return `rgb(${obj.r},${obj.g},${obj.b})` //todo есть специальный метод для вывода в формате RGB?
  // }
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
