import axios from "axios";
import { API_BASE_URL } from "../constants";

const baseUrl = API_BASE_URL;

//로드맵저장후 직전 저장 불러오기버튼api
export async function getRoadMapResotre(title) {
  const flow = await axios.get(
    baseUrl + "/v1/roadmap",
    // { title: title },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
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
export async function postRoadMapSave(flow, title) {
  console.log(flow);
  const save = await axios.post(
    baseUrl + "/v1/roadmap",
    { roadmap: flow, title: title },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );

  return save;
  //  request({

  // return        ({url:baseUrl+"/v1/post/recommend/subject",
  // method:'post',
  // body: flow})
  //  })
}

//로드맵 리스트 불러오는 api
export async function getRoadMapCard() {
  const getRoadMapList = await axios.get(baseUrl + "/v1/roadmap", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return getRoadMapList;
}
//디테일 로드맵카드 불러오는 api
export async function getDetailRoadMapCard(index) {
  const getDetailCard = await axios.get(baseUrl + `/v1/roadmap/${index}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return getDetailCard;
}

//포스트 리스트 불러오는 api
export async function getPostCard() {
  const getPostList = await axios.get(baseUrl);
  return getPostList;
}
