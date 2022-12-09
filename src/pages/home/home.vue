<template>
  <div class="home">
    <home-nav-tab />
    <img class="image" src="@/assets/img/home/banner.webp" alt="">
    <homeCityBox />
    <homeCategories />
    <homeContent class="content" />
    <button style="margin-bottom: 50px;" @click="moreBtnClick">加载更多</button>
  </div>
</template>

<script setup>
  import homeNavTab from './components/home-nav-tab.vue'
  import homeCityBox from './components/home-city-box.vue'
  import homeCategories from './components/home-categories.vue'
  import homeContent from './components/home-content.vue';
  import useHomeStore from '@/stores/module/home';
  
  const useHome = useHomeStore()
  // 获取热门城市的建议
  useHome.getHotSuggestsAction()
  useHome.getCategoriesAction()
  useHome.getContentDataAction()

  const moreBtnClick=()=>{
    useHome.getContentDataAction()
  }
</script>

<style scoped>
.image{
  width: 100%;
}
.content{
  margin-bottom: 50px;
}
</style>