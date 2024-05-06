<template>
  <div class="col grey" :class="{hidden:state.mainCol.hidden == true}">
    <div class="row">
      <div class="col">
        <div class="row"><div class="col" @click="hide()">Кликни и вся колонка скроется</div></div>
        <div class="row">
          <RoleAndContent msg="Роль 1" />
          <RoleAndContent v-for="num in [2,3,4,5,6]" :key="num" :msg="`Роль `+num"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    import {state} from '../../StateStore.js' 
    import RoleAndContent from "./RoleAndContent.vue";

    function hide() {
      state.mainCol.hidden = true;
      state.summCol.hidden = false;
    }

</script>

<style>
.rotated {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
}
.cell {
  border: solid 1px grey;
}

.hidden{
    display: none;
}
</style>
