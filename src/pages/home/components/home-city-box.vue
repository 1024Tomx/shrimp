<template>
  <div class="homeCityBox">
    <!-- 定位 -->
    <div class="location">
      <div @click="goCity" class="city">南昌</div>
      <div @click="getLocation" class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';


  const router = useRouter()

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
</script>

<style scoped>
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
</style>