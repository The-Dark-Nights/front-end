import CreateRoadmap from "./page/createRoadmap/createRoadmapIndex";
import Header from "./page/layout/header";
import MainPageIndex from "./page/mainPage/MainPageIndex";
import MyPageIndex from "./page/myPage/MyPageIndex";
import PostDetailIndex from "./page/postDetailPage/postDetailIndex";
import PostPageIndex from "./page/postPage/postPageIndex";
import RoadMapDetailIndex from "./page/roadMapDetail/roadMapDetailIndex";
import RoadMapPageIndex from "./page/roadMapPage/roadMapPageIndex";
import WritingPage from "./page/writingPage/writingPage";
import Routing from "./route/routings";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route index element={<MainPageIndex/>}/>
          <Route path="/mypage" element={<MyPageIndex/>}/>
          <Route path="/post" element={<PostPageIndex/>}/>
          <Route path="/createRoadmap" element={<CreateRoadmap/>}/>
          <Route path="/roadMap" element={<RoadMapPageIndex/>}/>
          <Route path="/postDetail" element={<PostDetailIndex/>}/>
          <Route path="/roadMapDetail" element={<RoadMapDetailIndex/>}/>
          <Route path="/writingPage" element={<WritingPage/>}/>
          {/* <Route path="/login" element={<Login/>}/> */}
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
