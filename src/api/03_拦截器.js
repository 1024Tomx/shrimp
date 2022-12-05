// axios.interceptors.request(请求成功,请求失败)
// axios.interceptors.request.use((config)=>{
//   console.log("拦截成功");
//   if(config.url == "user/info")
//   config.headers["token"] = "basjkd1231kjshda"
//   return config
// },(err)=>{
//   console.log("拦截失败");
// })
// axios.interceptors.response.use((res)=>{
//   // console.log(res);
//   console.log("响应成功");
//   return res.data
// },(err)=>{
//   console.log("响应失败");
// })

// http://123.207.32.32:8000/home/multidata"
// http://123.207.32.32:9001/lyric?id=500665346"

// axios.defaults.baseURL = "http://123.207.32.32:8000"

// axios.get("/home/multidata").then(res=>{
//   console.log(res);
// })


// const instance2 = axios.create({
//   baseURL:'http://123.207.32.32:8080',
//   timeout:10000
// })
// const instance3 = axios.create({
//   baseURL:'http://123.207.32.32:8081',
//   timeout:6000
// })
const instance1 = axios.create({
  baseURL:'http://123.207.32.32:9001'
})
instance1.interceptors.request.use((config)=>{
  console.log("实例拦截成功");
  return config
},(err)=>{
  console.log("拦截失败");
})
instance1.get("/lyric",{
  params:{
    id:'500665346'
  }
}).then(res=>{
  console.log(res);
})