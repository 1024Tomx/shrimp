
<template>
  <div class="App">
    <!-- $route.fullPath!=='/city' -->
    <!--  v-if="!$route.meta.showTabbar" -->
    <tabbar></tabbar>
    <router-view></router-view>
  </div>
</template>

<script setup>
  import tabbar from './components/tabbar/tabbar.vue';
</script>

<style scoped>

</style>

