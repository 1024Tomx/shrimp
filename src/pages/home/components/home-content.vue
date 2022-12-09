<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="item in contentData" >
        <homeItemV9 :item-data="item.data" v-if="(item.discoveryContentType===9)" />
        <homeItemV3 :item-data="item.data" v-else-if="(item.discoveryContentType===3)" />
      </template>
    </div>
  </div>
</template>

<script setup>
  import homeItemV9 from "@/components/home-item-v9/home-item-v9.vue"
  import homeItemV3 from "@/components/home-item-v3/home-item-v3.vue"
  import useHomeStore from '@/stores/module/home';
  import { storeToRefs } from 'pinia';

  const useHome = useHomeStore()
  const {contentData} = storeToRefs(useHome)
</script>

<style scoped>
.content{
  padding: 0 8px;
  position: relative;
  z-index: -1;
}
.content .title{
  padding: 0 10px;
  font-size: 22px;
}
.list{
  display: flex;
  flex-wrap: wrap;
}
</style>