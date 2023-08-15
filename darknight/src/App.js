import './App.css';
import Header from './page/layout/header';
import MainPageIndex from './page/mainPage/MainPageIndex';
import MyPageIndex from './page/myPage/MyPageIndex';
import PostPageIndex from './page/postPage/postPageIndex';


function App() {
  return (
    <Header>
       {/* <MainPageIndex/> */}
      <MyPageIndex/>
      {/* <PostPageIndex/> */}
      
    </Header>
  );
}

export default App;
