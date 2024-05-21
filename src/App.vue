<template>
  <div>
    <div v-for="sys in data.systems" :key="sys.id">
      <div v-for="el in sys.cells " :key="el.id">
        <OnlyDivs
          :msg=el.value
          :class=el.class
          :left=sys.id*100+50
          :color=ObjectToColor(el.color)
          :top=el.id*el.height
          :height=el.height
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import data from "./data/data.json";
  import OnlyDivs from "./components/OnlyDivs/OnlyDivs.vue";
  function ObjectToColor(obj){
      return `rgb(${obj.r},${obj.g},${obj.b})` //todo есть специальный метод для вывода в формате RGB?
  }
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
