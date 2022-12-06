<template>
  <div class="home">
    <home-nav-tab></home-nav-tab>
    <img class="image" src="@/assets/img/home/banner.webp" alt="">
    <homeCityBox></homeCityBox>
  </div>
</template>

<script setup>
  import homeNavTab from './components/home-nav-tab.vue';
  import homeCityBox from './components/home-city-box.vue'
</script>

<style scoped>
.image{
  width: 100%;
}
</style>