import VueRequest from "@/service/request"

export function getHotSuggests(){
  return VueRequest.get({url:"/home/hotSuggests"})
}

export function getCategories(){
  return VueRequest.get({url:"/home/categories"})
}

export function getContentData(page){
  return VueRequest.get({
    url:"/home/houselist",
    params:{
      page
    }
  })
}