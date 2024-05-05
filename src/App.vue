<template>
  <div>
    <div class="container">
      <div class="row">
        <SummColumn></SummColumn>
        <MainColumn></MainColumn>
      </div>
    </div>
  </div>
</template>

<script>
import SummColumn from './components/SummColumn.vue'
import MainColumn from './components/MainColumn/index.vue'

export default {
  name: 'App',
  components: {
    SummColumn,MainColumn
  }
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
.red {background-color: rgb(255, 177, 177);}
  .blue {background-color: rgb(184, 207, 255);}
  .green {background-color: rgb(175, 255, 164);}
  .grey {background-color: rgb(202, 202, 202);}
  .purple {background-color: rgb(229, 190, 255);}
  .yellow {background-color: rgb(223, 213, 155);}
  
</style>
