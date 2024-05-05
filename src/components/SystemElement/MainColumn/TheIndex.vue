<template>
  <div class="col grey">
    <div class="row">
      <div class="col">
        <div class="row"><div class="col" @click="hide()">Csldffjsa</div></div>
        <div class="row">
          <RoleAndContent :class="{red:hidden == 1, blue:hidden == 0}"/>
          <RoleAndContent />
          <RoleAndContent />
          <RoleAndContent />
          <RoleAndContent />
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
