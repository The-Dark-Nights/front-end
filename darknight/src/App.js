import './App.css';
import Header from './page/layout/header';
import MainPageIndex from './page/mainPage/MainPageIndex';
import MyPageIndex from './page/myPage/MyPageIndex';
import PostPageIndex from './page/postPage/postPageIndex';
import WritingPage from './page/writingPage/writingPage';


function App() {
  return (
    <Header>
       {/* <MainPageIndex/> */}
      {/* <MyPageIndex/> */}
      {/* <PostPageIndex/> */}
      <WritingPage/>      
    </Header>
  );
}

export default App;
