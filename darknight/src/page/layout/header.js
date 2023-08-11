
import { useState } from 'react';
import './common.css'
import LoginAfterIndex from './component/loginAfter/loginAfterIndex';
import LoginBefore from './component/loginBefore/loginBefore';


function Header({children}) {
  const [over,setOver]=useState(false);
  const mouseOver=()=>{
    setOver(!over)
    console.log(1)
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
            <p>Post</p>
          </div>
          {/* <!-- 메뉴박스 --> */}

          <ul className="menuBoxTitle">
            <li className={over?'change':''} onMouseOver={mouseOver}>
              <img src="/img/search.png" alt="" />
              Posts
            </li>
            <li className='change'>
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
