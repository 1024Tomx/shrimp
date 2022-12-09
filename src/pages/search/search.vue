<template>
  <div class="search top-page">
    <h2>showStartDate:{{$route.query.showStartDate}}</h2>
    <h2>showEndDate:{{$route.query.showEndDate}}</h2>
    <!-- <h2>showEndDate:{{$route.query.city}}</h2> -->
    <h2>city:{{cityName}}</h2>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  const cityName= JSON.parse(useRoute().query.city).cityName
  
</script>

<style scoped>

</style>