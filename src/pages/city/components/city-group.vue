<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList" :sticky="false" highlight-color="#ff9954">
      <van-index-anchor index="热门" />
      <div class="hotCity">
        <template v-for="hotCity in cities.hotCities">
          <div @click="cityClick(hotCity)" class="city">{{hotCity.cityName}}</div>
        </template>
      </div>
      <template v-for="(group,key,index) in cities.cities" :key="index+''">
        <van-index-anchor :index="group.group" />
        <template v-for="(city,indexC) in group.cities" :key="indexC+''">
          <van-cell @click="cityClick(city)" :title="city.cityName" />
        </template>
      </template>
    </van-index-bar>
    <!-- <template v-for="(group,key,index) in cities.cities" :key="index+''">
      <h2>{{group.group}}</h2>
      <template v-for="(city,indexC) in group.cities" :key="indexC+''"> 
        <div class="city">{{city.cityName}}</div>
      </template>
    </template> -->
  </div>
</template>

<script setup>
  // import { computed, toRaw } from 'vue';
  import useCityStore from '@/stores/module/city';
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter()
  const useCity = useCityStore()
  const props = defineProps({
    cities:{
      default:{}
    }
  })
  const indexList = computed(()=>{
    return ['#',...props.cities.cities.map(n=>n.group)]
  })
  // const cityAll = computed(()=>{
  //   props.cities.cities=[{
  //     group:"#",
  //     cities:toRaw(props.cities.hotCities)
  //   },...props.cities.cities]
  //   props.cities = Array.from(new Set(props.cities.cities))
  //   return props.cities
  // })
  // console.log(props.cities);
  const cityClick = (city)=>{
    useCity.city = city
    // 返回上一页
    router.back()
  }
</script>

<style scoped>
:deep(.van-hairline--bottom){
  transform: translate3d(0,119px,0) !important;
}
.hotCity{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;
}
.hotCity .city{
  width: 70px;
  height: 28px;
  border-radius: 14px;
  font-size: 12px;
  color: #000;
  text-align: center;
  line-height: 28px;
  background: #fff4ec;
  margin: 5px 0;
}
</style>