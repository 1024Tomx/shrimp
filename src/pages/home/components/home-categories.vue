<template>
  <div class="categories">
    <template v-for="item in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="text">{{item.title}}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
  import useHomeStore from '@/stores/module/home';
  import { storeToRefs } from 'pinia';

  const useHome = useHomeStore()
  const { categories } = storeToRefs(useHome)
</script>

<style scoped>
.categories{
  display: flex;
  height: 80px;
  overflow-x: auto;
  padding: 0 10px;
}
.item{
  flex-shrink: 0;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.categories::-webkit-scrollbar{
  display: none;
}
.item img{
  width: 32px;
  height: 32px;
}
.item .text{
  font-size: 12px;
  margin-top: 8px;
}
</style>