const baseURL = "http://123.207.32.32:8000"

axios.defaults.baseURL = baseURL
axios.defaults.headers = {}
axios.defaults.timeout = 6000

axios.get("/home/multidata").then(res=>{
  console.log(res.data);
})

// axios.all([
//   axios.get("http://123.207.32.32:8000/home/multidata"),
//   axios.get("http://123.207.32.32:9001/lyric?id=500665346")
// ]).then(res=>{
//   console.log(res);
// })