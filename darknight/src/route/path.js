
import CreateRoadmap from "../page/createRoadmap/createRoadmapIndex";

import MainPageIndex from "../page/mainPage/MainPageIndex";
import MyPageIndex from "../page/myPage/MyPageIndex";
import PostPageIndex from "../page/postPage/postPageIndex";



const routes = () => [
  {
    path: "/",
    element: <MainPageIndex />,
  },


  {
    path: "/mypage",
    element: <MyPageIndex />,
  },
  {
    path: "/post",
    element: <PostPageIndex />,
  },
  {
    path: "/createRoadmap",
    element: <CreateRoadmap />,
  },
 

 
];
export default routes;
