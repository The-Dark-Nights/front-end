import CreateRoadmap from "../page/createRoadmap/createRoadmapIndex";

import MainPageIndex from "../page/mainPage/MainPageIndex";
import MyPageIndex from "../page/myPage/MyPageIndex";
import PostPageIndex from "../page/postPage/postPageIndex";
import RoadMapPageIndex from "../page/roadMapPage/roadMapPageIndex";

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
  {
    path: "/roadMap",
    element: <RoadMapPageIndex/>,
  },
];
export default routes;
