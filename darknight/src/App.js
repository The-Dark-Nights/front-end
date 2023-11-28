import { useState } from "react";
import CreateRoadmap from "./page/createRoadmap/createRoadmapIndex";
import Header from "./page/layout/header";
import MainPageIndex from "./page/mainPage/MainPageIndex";
import MyPageIndex from "./page/myPage/MyPageIndex";
import PostDetailIndex from "./page/postDetailPage/postDetailIndex";
import PostPageIndex from "./page/postPage/postPageIndex";
import RoadMapDetailIndex from "./page/roadMapDetail/roadMapDetailIndex";
import RoadMapPageIndex from "./page/roadMapPage/roadMapPageIndex";
import WritingPage from "./page/writingPage/writingPage";
import OAuth2RedirectHandler from "./oauth2/OAuth2RedirectHandler";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getCurrentUser } from "./utils/loginUtils";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const loadCurrentlyLoggedInUser = () => {
    getCurrentUser()
      .then((response) => {
        setCurrentUser(response);
        setAuthenticated(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    setAuthenticated(false);
    setCurrentUser(null);
    alert("로그아웃 했습니다.");
  };

  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route index element={<MainPageIndex />} />
          <Route path="/mypage" element={<MyPageIndex />} />
          <Route path="/post" element={<PostPageIndex />} />
          <Route path="/createRoadmap" element={<CreateRoadmap />} />
          <Route path="/roadMap" element={<RoadMapPageIndex />} />
          <Route path="/postDetail" element={<PostDetailIndex />} />
          <Route path="/roadMapDetail/:id" element={<RoadMapDetailIndex />} />
          <Route path="/writingPage" element={<WritingPage />} />
          <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
          {/* <Route path="/login" element={<Login/>}/> */}
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
