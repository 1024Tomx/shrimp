import { onMounted, onUnmounted, ref } from "vue";
import { throttle } from "underscore"
// 传入回调函数
// export function useScrollListener(ListenerScrollCB){
//   // 监听下拉加载更多
//   const ListenerScroll = ()=>{
//     // 设备的高度
//     const clientHeight = document.documentElement.clientHeight
//     // 距离上方的位置
//     const scrollTop = document.documentElement.scrollTop
//     // 整个滚动条的高度
//     const scrollHeight = document.documentElement.scrollHeight
//     if((clientHeight+scrollTop+1) >=scrollHeight){
//       console.log("加载更多");
//       if(ListenerScrollCB)ListenerScrollCB()
//     }
//   }
//   // 开始监听下拉加载更多
//   onMounted(()=>{
//     window.addEventListener("scroll",ListenerScroll)
//   })
//   // 取消监听下拉加载更多
//   onUnmounted(() => {
//     window.removeEventListener("scroll",ListenerScroll)
//   })
// }

export function useScrollListener(){
  const flag = ref(false)
  const scrollTop = ref(0)
  const clientHeight= ref(0)
  const scrollHeight= ref(0)
  // 监听下拉加载更多
  const ListenerScroll = throttle(()=>{
    // 设备的高度
    clientHeight.value = document.documentElement.clientHeight
    // 距离上方的位置
    scrollTop.value = document.documentElement.scrollTop
    // 整个滚动条的高度
    scrollHeight.value = document.documentElement.scrollHeight
    if((clientHeight.value + scrollTop.value + 1) >= scrollHeight.value){
      console.log("加载更多");
      flag.value = true
    }
  },100)
  // 开始监听下拉加载更多
  onMounted(()=>{
    window.addEventListener("scroll",ListenerScroll)
  })
  // 取消监听下拉加载更多
  onUnmounted(() => {
    window.removeEventListener("scroll",ListenerScroll)
  })
  return {
    flag,
    scrollTop,
    clientHeight,
    scrollHeight
  }
}