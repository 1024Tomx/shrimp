<template>
  <div class="city top-page">
    <!-- 搜索框 -->
    <div class="search">
      <el-input
        v-model="cityValue"
        class="w-50 m-2 searchInp"
        size="small"
        placeholder="城市/区域/位置"
        >
        <template #prefix>
          <el-icon class="inp-icon">
            <Search />
          </el-icon>
        </template>
      </el-input>
      <el-button
        text
        @click="goback"
        >取消</el-button>
      <!-- <span @click="goback" class="cancel">取消</span> -->
    </div>
    <!-- tab切换 -->
    <el-tabs 
      v-model="activeName"
      stretch
      class="demo-tabs">
      <el-tab-pane label="国内 港澳台" name="first"></el-tab-pane>
      <el-tab-pane label="国外" name="second"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
  import {Search } from "@element-plus/icons-vue"
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { getCityAll } from "@/service"


  const router =useRouter()
  const cityValue=ref("")
  const goback= ()=>{
    router.back()
  }

  const activeName = ref("first")

  getCityAll().then(res=>{
    console.log(res.data);
  })
</script>

<style scoped>
.city{
  
}
/* 搜索框 */
.search{
  padding: 10px 0 5px 5px;
  display: flex;
  align-items: center;
}
.search .cancel{
  width: 44px;
  margin-left: 7px;
}
.inp-icon{
  color: var(--color-all);
}
/* .searchInp{
  --el-border-radius-base:15px;
}
/deep/
>>>
*/

:deep(.el-input__wrapper){
  /* --el-border-radius-base:15px; */
  border-radius: 15px;
  background-color: #f9f9f9;
}
.el-input{
  --el-input-focus-border-color:var(--color-all);
} 

/* tab切换 */
.demo-tabs{
  margin-top: 10px;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
:deep(.el-tabs__nav-wrap::after){
  width: 0;
}
:deep(.el-tabs__active-bar){
  --el-color-primary:var(--color-all);
  width: 50px !important;
  left: 55px;
  /* background-color: var(--color-all); */
}
:deep(.el-tabs__item:hover){
  --el-color-primary:black;
}
:deep(.el-tabs__item){
  --el-tabs-header-height: 50px;
  --el-color-primary:black;
}
</style>