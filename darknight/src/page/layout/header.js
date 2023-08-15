
import { useState } from 'react';
import "../../css/common.css";
import LoginAfterIndex from './component/loginAfter/loginAfterIndex';
import LoginBefore from './component/loginBefore/loginBefore';


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
        <div className="logo">
          <img src="/img/logo.png" alt="" />
        </div>
        <div className="menuBox">
          {/* <!-- 페이지이름 --> */}
          <div className="pageName ">
            <p>HOME</p>
          </div>
          {/* <!-- 메뉴박스 --> */}

          <ul className="menuBoxTitle">
            <li className={over?'change menuBoxLi':'menuBoxLi'} onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
              <img src="/img/search.png" alt="" />
              Posts
            </li>
            <li className={over1?'change menuBoxLi':'menuBoxLi'} onMouseOver={mouseOver1} onMouseLeave={mouseLeave1}>
              <img src="/img/search.png" alt="" />
              RoadMap
            </li>
          </ul>
        </div>
        {/* <!-- 로그인전-> --> */}
       <LoginBefore/>
        {/* <!-- 로그인후 --> */}
        <LoginAfterIndex/> 

    
      </div>
      <div className="mainContainer contents">{children}</div>
    </>
  );
}
export default Header;
