import axios from "axios"

const baseUrl = "http://192.168.0.59:9999"

//로드맵저장후 직전 저장 불러오기버튼api
export async function getRoadMapResotre(){
   const flow = await axios.get(
      baseUrl+"/test",

     )
     return flow;
   }
   //  console.log(flowkey)
   //  return  (await axios({
   //    url:baseUrl+"/v1/post/recommend/subject",
   //    method:'get',
   //    body:flowkey}))
   //  request({

   //  })
//   } 

//로드맵 작성후 저장버튼 api
export async  function postRoadMapSave(flow){
    console.log(flow)
   const save=await axios.post(baseUrl+"/test",{flow:flow}
  
   
   ) 
   return save;
   //  request({
       
   // return        ({url:baseUrl+"/v1/post/recommend/subject",
   // method:'post',
   // body: flow})
   //  })
  }

//로드맵 리스트 불러오는 api
export async function getRoadMapCard(){
   const getRoadMapList=await axios.get(baseUrl,)
   return getRoadMapList;
}
//포스트 리스트 불러오는 api
export async function getPostCard(){
   const getPostList=await axios.get(baseUrl,)
   return getPostList;
}