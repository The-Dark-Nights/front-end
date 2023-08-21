import CreateRoadmap from "../page/createRoadmap/createRoadmapIndex";

import MainPageIndex from "../page/mainPage/MainPageIndex";
import MyPageIndex from "../page/myPage/MyPageIndex";
import PostDetailIndex from "../page/postDetailPage/postDetailIndex";
import PostPageIndex from "../page/postPage/postPageIndex";
import RoadMapDetailIndex from "../page/roadMapDetail/roadMapDetailIndex";

import RoadMapPageIndex from "../page/roadMapPage/roadMapPageIndex";
import WritingPage from "../page/writingPage/writingPage";

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
  {
    path: "/postDetail",
    element: <PostDetailIndex/>,
  },
  {
    path: "/roadMapDetail",
    element: <RoadMapDetailIndex/>,
  },
  {
    path: "/writingPage",
    element: <WritingPage/>,
  },

];
export default routes;
