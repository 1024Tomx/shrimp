import axios from "axios";
class VueRequest {

  constructor(baseURL,timeout=10000){
    this.instance = axios.create({
      baseURL,
      timeout
    })
  }

  request(config){
    return new Promise((resolve,reject)=>{
      this.instance.request(config).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        console.log("请求失败");
      })
    })
  }

  get(config){
    return this.request({...config,method:"get"})
  }

  post(config){
    return this.request({...config,method:"post"})
  }
}

const instance = new VueRequest("http://123.207.32.32:8000")
const instance1 = new VueRequest("http://123.207.32.32:9001")

export default instance