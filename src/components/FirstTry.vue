<template>
  <div class="container">
    <div class="row blue">
      <div class="col red">
        {{ props.msg }}
      </div>
      <div class="col yellow">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref,defineProps} from 'vue'


  const name = ref('FirstTry')
  const props = defineProps({
    msg: String
  })

</script>

<style scoped>

</style>
