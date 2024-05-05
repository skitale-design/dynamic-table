<template>
  <div class="col grey">
    <div class="row">
      <div class="col">
        <div class="row"><div class="col" @click="hide()">При клике будет исчезать колонка Роль1</div></div>
        <div class="row">
          <RoleAndContent msg="Роль 1" :class="{hidden:hidden == true}"/>
          <RoleAndContent msg="Роль 2" />
          <RoleAndContent msg="Роль 3" />
          <RoleAndContent msg="Роль 4" />
          <RoleAndContent msg="Роль 5" />
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
