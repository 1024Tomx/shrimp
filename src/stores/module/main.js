import { defineStore } from "pinia";

const startDate = new Date()
const endDate = new Date()
endDate.setDate(endDate.getDate()+1)


const useMainStore = defineStore("main",{
  state:()=>({
    token:'',
    startDate,
    endDate
  })
})

export default useMainStore