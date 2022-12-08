import VueRequest from "@/service/request"

export function getHotSuggests(){
  return VueRequest.get({url:"/home/hotSuggests"})
}