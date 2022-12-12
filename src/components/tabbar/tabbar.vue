<template>
  <el-menu
    :default-active="$route.path"
    active-text-color="#ff9954"
    class="tabbar"
    router>
  <template v-for="(item,index) in tabbarData" :key="index+''">
    <el-menu-item class="tabbar-item" :index="item.path">
      <template #title>
        <img v-if="($route.path != item.path)" class="img" :src="getImageURL(item.image)" alt="">
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
  // import { watch } from "vue";
  // import { useRoute } from "vue-router";
  // 获取索引下标
  // const route = useRoute()
  // watch(route,(n)=>{
  //   const index = tabbarData.findIndex(item=>item.path===n.path)
  //   if(index < 0)return
  // })
  
</script>

<style scoped>
  .tabbar{
    position: fixed;
    bottom: -4px;
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
    padding-bottom: 6px;
  }
  .img{
    width: 24px;
    height: 24px;
  }
  .active{
    color: var(--color-all);
  }
</style>