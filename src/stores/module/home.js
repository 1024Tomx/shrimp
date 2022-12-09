import { getHotSuggests,getCategories,getContentData } from "@/service";
import { defineStore } from "pinia";


const useHomeStore = defineStore("home",{
  state:()=>({
    hotSuggests:[],
    categories:[],
    currentpage:1,
    contentData:[],
  }),
  actions:{
    async getHotSuggestsAction(){
      const res = await getHotSuggests()
      this.hotSuggests = res.data
    },
    async getCategoriesAction(){
      const res = await getCategories()
      this.categories = res.data
    },
    async getContentDataAction(){
      const res = await getContentData(this.currentpage)
      this.contentData.push(...res.data)
      this.currentpage++
    }
  }
})

export default useHomeStore