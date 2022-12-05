<template>
  <div class="tabbar">
    <template v-for="(item,index) in tabbarData" :key="index+''">
      <div 
        :class="{active:currentIndex === index}" 
        class="tabbar-item"
        @click="tabbarItemClick(index,item.path)"
        >
        <!-- vite: URL -->
        <img v-if="(currentIndex != index)" class="img" :src="getImageURL(item.image)" alt="">
        <img v-else class="img" :src="getImageURL(item.activeImage)" alt="">
        <span class="text">{{item.text}}</span>
      </div>
    </template>
    <!-- <div class="tabbar-item">
      <img class="img" src="@/assets/img/tabbar/tab_home.png" alt="">
      <span class="text">首页</span>
    </div>
    <div class="tabbar-item">
      <img class="img" src="@/assets/img/tabbar/tab_favor.png" alt="">
      <span class="text">收藏</span>
    </div>
    <div class="tabbar-item">
      <img class="img" src="@/assets/img/tabbar/tab_order.png" alt="">
      <span class="text">订单</span>
    </div>
    <div class="tabbar-item">
      <img class="img" src="@/assets/img/tabbar/tab_message.png" alt="">
      <span class="text">消息</span>
    </div> -->
  </div>
</template>

<script setup>
  import tabbarData from "@/utils/data/tabbar"
  import getImageURL from '@/utils/getImage'
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter()
  const currentIndex = ref(0)
  const tabbarItemClick = (index,path) =>{
    currentIndex.value = index
    router.push(path)
  }
  // const getImageURL = (image)=>{
  //   console.log(image);
  //   return new URL(`../../assets/img/${image}`,import.meta.url).href
  // }
</script>

<style scoped>
  .tabbar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 50px;
    border-top: 1px solid #f3f3f3;
  }
  .tabbar .tabbar-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
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