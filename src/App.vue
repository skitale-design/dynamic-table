<template>
  <div>
    <div v-for="el in data.cells" :key="el.id">
      <OnlyDivs
        :msg=el.value
        class="cell"
        :color="`rgb(${255*Math.random()},${255*Math.random()},${255*Math.random()}`"
        :top=el.id*el.height
        :height=el.height
      />
    </div>
  </div>
</template>

<script setup>
  import data from "./data/data.json";
  import OnlyDivs from "./components/OnlyDivs/OnlyDivs.vue";
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
.red {
  background-color: rgb(255, 186, 186);
}
.blue {
  background-color: rgb(184, 207, 255);
}
.green {
  background-color: rgb(175, 255, 164);
}
.grey {
  background-color: rgb(202, 202, 202);
}
.purple {
  background-color: rgb(229, 190, 255);
}
.yellow {
  background-color: rgb(223, 213, 155);
}
</style>
