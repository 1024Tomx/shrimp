
// axios({
//   url:"http://123.207.32.32:8000/home/multidata",
//   method:'get'
// }).then(res=>{
//   console.log(res.data.data);
// })

// axios.request({
//   url:"http://123.207.32.32:8000/home/multidata",
//   method:'get'
// }).then(res=>{
//   console.log(res.data);
// })

// axios.get("http://123.207.32.32:8000/home/multidata")
// axios.get("http://123.207.32.32:9001/lyric?id=500665346").then(res=>{
//   console.log(res.data);
// })

// axios.get("http://123.207.32.32:9001/lyric",{
//   params:{
//     id:"500665346"
//   }
// }).then(res=>{
//   console.log(res.data);
// })

axios.post("http://152.136.185.210:5000/login",{
  name:"coderwhy",
  password:'123456'
}).then(res=>{
  console.log(res.data);
})

// fetch("http://123.207.32.32:8000/home/multidata").then(res=>{
//   res.json().then(data=>{
//     console.log(data.data,"fetch");
//   })
// })