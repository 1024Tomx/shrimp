<template>
  <div class="home">
    <home-nav-tab />
    <img class="image" src="@/assets/img/home/banner.webp" alt="">
    <homeCityBox />
    <homeCategories />
    <div 
      class="searc-bar" 
      v-if="showContent">
      <searchBar />
    </div>
    <homeContent class="content" />
  </div>
</template>

<script setup>
  import homeNavTab from './components/home-nav-tab.vue'
  import homeCityBox from './components/home-city-box.vue'
  import homeCategories from './components/home-categories.vue'
  import homeContent from './components/home-content.vue';
  import searchBar from '@/components/search-bar/search-bar.vue'
  import useHomeStore from '@/stores/module/home';
  import { useScrollListener } from "@/hooks/useScroll"
  import { computed, ref, watch } from 'vue';
  
  const useHome = useHomeStore()
  // 获取热门城市的建议
  useHome.getHotSuggestsAction()
  useHome.getCategoriesAction()
  useHome.getContentDataAction()
  // 传入回调函数
  // useScrollListener(()=>{
  //   useHome.getContentDataAction()
  // })
  const { flag,scrollTop } = useScrollListener()
  watch(flag,(newVal)=>{
    if(newVal){
      useHome.getContentDataAction().then(()=>{
        flag.value = false
      })
    }
  })
  const showContent = computed(() => scrollTop.value >150)
  
</script>

<style scoped>
.image{
  width: 100%;
}
.home{
  padding-bottom: 50px;
}
.searc-bar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 6px 6px 10px;
  background-color: #fff;
}
</style>