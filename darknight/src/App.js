import './App.css';
import Header from './page/layout/header';
import MainPageIndex from './page/mainPage/MapinPageIndex';
import MyPageIndex from './page/myPage/MyPageIndex';

function App() {
  return (
    <Header>
       <MyPageIndex/>
       {/* <MainPageIndex/> */}
    </Header>
  );
}

export default App;
