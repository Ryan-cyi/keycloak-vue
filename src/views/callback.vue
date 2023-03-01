<template>
  <div>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</div>
</template>

<script setup lang="ts">

import {onMounted} from "vue";

import {router} from "../router";

onMounted(()=>{
  setTimeout(()=>{
    router.replace({path: localStorage.getItem("__destination__") || '/'})
  },1000)
})

</script>

<style scoped>

</style>
