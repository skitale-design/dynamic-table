<template>
  <div class="col grey">
    <div class="row">
      <div class="col">
        <div class="row"><div class="col" @click="hide">Cslfjsa</div></div>
        <div class="row">
          <RoleAndContent :class="{red:user.id == 1, blue:user.id == 2}"/>
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
        hidden == true;
    }

    // hide();

    // function hide() {
    //     console.log("hide")
    // }

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
