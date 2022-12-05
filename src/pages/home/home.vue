<template>
  <div class="home">
    <h2>home</h2>
    <el-button type="success" loading>按钮</el-button>
    <el-button type="primary">按钮</el-button>
    <el-button type="danger">按钮</el-button>
    <el-input
      v-model="input3"
      class="w-50 m-2"
      size="large"
      placeholder="Please Input"
      :prefix-icon="Search"
    />
  </div>
</template>

<script setup>
  import { Search } from "@element-plus/icons-vue"
  import { ref } from "vue";

  const input3 = ref("")
</script>

<style scoped>

</style>\