<template>
  <div class="col grey">
    <div class="row">
      <div class="col">
        <div class="row"><div class="col" @click="hide()">При клике будет исчезать колонка Роль1</div></div>
        <div class="row">
          <RoleAndContent msg="Роль 1" :class="{hidden:hidden == true}"/>
          <RoleAndContent v-for="num in [2,3,4,5,6]" :key="num" :msg="`Роль `+num"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    import {ref} from 'vue'
    import RoleAndContent from "./RoleAndContent.vue";

    const hidden = ref(false);
    
    function hide() {
        console.log("hide");
        hidden.value = !hidden.value;
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
