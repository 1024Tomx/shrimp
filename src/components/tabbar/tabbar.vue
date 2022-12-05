<template>
  <el-menu
    :default-active="currentIndex"
    active-text-color="#ff9954"
    class="tabbar"
    router
    @select="handleSelect"
    >
  <template v-for="(item,index) in tabbarData" :key="index+''">
    <el-menu-item class="tabbar-item" :route="item.path" :index="index+''">
      <template #title>
        <img v-if="(currentIndex != index)" class="img" :src="getImageURL(item.image)" alt="">
        <img v-else class="img" :src="getImageURL(item.activeImage)" alt="">
        <span class="text">{{item.text}}</span>
      </template>
    </el-menu-item>
  </template>
    
  </el-menu>
</template>

<script setup>
  import tabbarData from "@/utils/data/tabbar"
  import getImageURL from '@/utils/getImage'
  import { ref } from "vue";

  const currentIndex = ref("0")
  const handleSelect = (key) => {
    currentIndex.value = key
  }
</script>

<style scoped>
  .tabbar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    justify-content: center;
    border-top: 1px solid #f3f3f3;
  }
  .tabbar .tabbar-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 20px;
    align-items: center;
  }
  .img{
    width: 24px;
    height: 24px;
  }
  .active{
    color: var(--color-all);
  }
</style>