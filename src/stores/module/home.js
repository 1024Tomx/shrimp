import { getHotSuggests } from "@/service";
import { defineStore } from "pinia";


const useHomeStore = defineStore("home",{
  state:()=>({
    hotSuggests:[]
  }),
  actions:{
    async getHotSuggestsAction(){
      const res = await getHotSuggests()
      this.hotSuggests = res.data
    }
    
  }
})

export default useHomeStore