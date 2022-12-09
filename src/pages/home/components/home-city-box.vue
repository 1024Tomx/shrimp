<template>
  <div class="homeCityBox">
    <!-- 定位 -->
    <div class="location bottom-gray-line">
      <div @click="goCity" class="city">{{city.cityName}}</div>
      <div @click="getLocation" class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
    <div @click="(showDateSelect = true)" class="section bottom-gray-line">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{showStartDate}}</span>
        </div>
        <div class="stay">共{{stayCount}}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{showEndDate}}</span>
        </div>
      </div>
    </div>
    <van-calendar 
      v-model:show="showDateSelect" 
      type="range" 
      color="#ff9954"
      :show-confirm="false"
      :round="false"
      @confirm="onConfirm" />
    <div class="section bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <div class="section bottom-gray-line">关键字/位置/民宿名</div>
    <div class="section hot-suggest">
      <template v-for="(item,index) in hotSuggests" :key="index+''">
        <span :style="{color: item.tagText.color,
          backgroundColor: item.tagText.background.color}" 
          class="tag">
          {{item.tagText.text}}
        </span>
      </template>
    </div>
    <div class="section startSearch">
      <div @click="goSearch" class="btn">按钮</div>
    </div>
  </div>
</template>

<script setup>
  import useCityStore from '@/stores/module/city';
  import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router';
  import { formatDate,getDiffDate } from "@/utils/format-date"
  import { ref } from 'vue';
  import useHomeStore from "@/stores/module/home"

  // 获取路由
  const router = useRouter()
  // 获取状态管理
  const useHome = useHomeStore()
  const useCity = useCityStore()
  // 获取城市名称
  const {city} =storeToRefs(useCity)
  const goCity = () =>{
    router.push("/city")
  }

  // 定位
  const getLocation = ()=>{
    navigator.geolocation.getCurrentPosition((res)=>{
      console.log("请求成功",res);
    },(err)=>{
      console.log("请求失败",err);
    },{
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })
  }

  // 获取当前日期
  // const endDate = new Date(startDate.getTime() + 60*60*24*1000) 日期的计算逻辑
  const startDate = new Date()
  const newDate = new Date()
  const endDate = new Date(newDate.setDate(newDate.getDate()+1))
  // 展示的开始结束日期
  const showStartDate = ref(formatDate(startDate))
  const showEndDate = ref(formatDate(endDate))
  // 获取入住总天数
  const stayCount = ref(getDiffDate(startDate,endDate))

  // 展示日期组件
  const showDateSelect = ref(false)
  // 监听日期的获取
  const onConfirm = (value)=>{
    const selStartDate = value[0]
    const selEndDate = value[1]
    showStartDate.value = formatDate(selStartDate)
    showEndDate.value = formatDate(selEndDate)
    // 计算入住天数
    stayCount.value = getDiffDate(selStartDate,selEndDate)

    showDateSelect.value = false
  }
  
  // 热门城市数据
  const { hotSuggests } = storeToRefs(useHome)

  // 跳转到搜索页面
  const goSearch = ()=>{
    router.push({
      path:'/search',
      query:{
        showStartDate:showStartDate.value,
        showEndDate:showEndDate.value,
        city:JSON.stringify(city.value)
      }
    })
  }
</script>

<style scoped>
.homeCityBox{
  --van-calendar-popup-height:100%;
}
  /* 定位 */
.location{
  display: flex;
  padding: 14px 20px;
  /* justify-content: space-between; */
  align-items: center;
}
.city{
  flex: 1;
  font-size: 15px;
  color: #333;
}
.position{
  width: 74px;
  display: flex;
}
.position .text{
  font-size: 12px;
  color: #333;
}
.position img{
  width: 14px;
  height: 14px;
  margin-left: 5px;
}
/* 日期选择 */
.section{
  display: flex;
  flex-wrap: wrap;
  height: 44px;
  align-items: center;
  padding: 0 20px;
  color: #999;
}
.start{
  flex: 1;
  display: flex;
  align-items: center;
  height: 44px;
  border-right: 1px solid var(--line-color);
}
.end{
  min-width: 30%;
  padding-left: 20px;
}
.date{
  flex: 1;
  display: flex;
  flex-direction: column;
}
.stay{
  flex: 1;
  color: #666;
  padding-left: 35px;
}

.tip{
  font-size: 12px;
}
.time{
  font-size: 15px;
  font-weight: 500;
  margin-top: 3px;
  color: #333;
}

/* 热门推荐 */
.hot-suggest {
  margin: 10px 0;
  height: auto;
}
.tag {
  font-size: 12px;
  padding: 4px 8px;
  margin: 3px;
  border-radius: 14px;
}
/* 搜索按钮 */
.btn {
  width: 342px;
  height: 38px;
  max-height: 50px;
  font-weight: 500;
  font-size: 18px;
  line-height: 38px;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  background-image:var(--theme-linear-gradient);
}
</style>