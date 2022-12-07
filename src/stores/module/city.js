import { getCityAll } from "@/service";
import { defineStore } from "pinia";


const useCityStore = defineStore("city",{
  state:()=>({
    cityAll:{},
    city:{cityName:'南昌'}
  }),
  actions:{
    getCityAllAction(){
      getCityAll().then(res=>{
        this.cityAll = res.data
      })
    }
  }
})
export default useCityStore


