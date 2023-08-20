
import { useState } from 'react';
import "../../css/common.css";
import LoginAfterIndex from './component/loginAfter/loginAfterIndex';
import LoginBefore from './component/loginBefore/loginBefore';
import {Link,NavLink} from 'react-router-dom'

function Header({children}) {
  const [over,setOver]=useState(false);
  const [over1,setOver1]=useState(false);
  const mouseOver=()=>{
    setOver(true)

  }
  const mouseLeave=()=>{
    setOver(false)
  }
  const mouseOver1=()=>{
    setOver1(true)

  }
  const mouseLeave1=()=>{
    setOver1(false)
  }
  return (
    <>
      <div className="header">
        {/* <!-- 로고 --> */}
        <Link to='/'><div className="logo">
          <img src="/img/logo.png" alt="" />
        </div></Link>
        <div className="menuBox">
          {/* <!-- 페이지이름 --> */}
          <div className="pageName ">
            <p>HOME</p>
          </div>
          {/* <!-- 메뉴박스 --> */}

          <ul className="menuBoxTitle">
          <Link to="/post">  <li className={over?'change menuBoxLi':'menuBoxLi'} onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
             <img src="/img/post.png" alt="" />
              Posts
            </li></Link>
          <Link to="/roadMap"><li className={over1?'change menuBoxLi':'menuBoxLi'} onMouseOver={mouseOver1} onMouseLeave={mouseLeave1}>
              <img src="/img/road.png" alt="" />
              RoadMap
            </li></Link>
          </ul>
        </div>
        {/* <!-- 로그인전-> --> */}
       <LoginBefore/>
        {/* <!-- 로그인후 --> */}
        <LoginAfterIndex/> 

    
      </div>
      <div className="mainContainer contents crateRoadMapContent">{children}</div>
    </>
  );
}
export default Header;
