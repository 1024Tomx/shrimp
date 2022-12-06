import VueRequest from "@/service/request"

export function getCityAll(){
  return VueRequest.get({url:"/city/all"})
}
// export function getCityList(){
//   return VueRequest.get({url:"/city/list"})
// }