
import { useState } from 'react';

import LoginAfterIndex from './component/loginAfter/loginAfterIndex';
import LoginBefore from './component/loginBefore/loginBefore';
import {Link,NavLink} from 'react-router-dom'
import styled from 'styled-components'
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
      <HeadWrap>
        {/* <!-- 로고 --> */}
        <Link to='/'><Logo>
          <img src="/img/logo.png" alt="" />
        </Logo></Link>
        <MenuBox>
          {/* <!-- 페이지이름 --> */}
          <PageBox>
            <p>HOME</p>
          </PageBox>
          {/* <!-- 메뉴박스 --> */}

          <MenuBoxTitle>
          <Link to="/post">  <MenuBoxLi over={over} onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
             <img src="/img/post.png" alt="" />
              Posts
            </MenuBoxLi></Link>
          <Link to="/roadMap"><MenuBoxLi over1={over1} onMouseOver={mouseOver1} onMouseLeave={mouseLeave1}>
              <img src="/img/road.png" alt="" />
              RoadMap
            </MenuBoxLi></Link>
          </MenuBoxTitle>
        </MenuBox>
        {/* <!-- 로그인전-> --> */}
       <LoginBefore/>
        {/* <!-- 로그인후 --> */}
        <LoginAfterIndex/> 

    
      </HeadWrap>
      <MainContainer>{children}</MainContainer>
    </>
  );
}
export default Header;
let MainContainer=styled.div`
margin-top: 5%;
width: 80%;
margin: 0 auto;
/* margin-bottom: 100px; */
`
let HeadWrap=styled.div`
width: 100%;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 -1px 0px rgba(0, 0, 0, 0.02);
  display: flex;
  justify-content: space-around;
`
let Logo=styled.div`
& >img{
  width: 100px;
  margin-top: 1rem;
}
`
let PageBox=styled.div`
font-weight: bold;
font-size: 20px;
`
let MenuBox=styled.div`
margin-top: 1rem;
margin-left: -25%;`
let MenuBoxTitle=styled.ul`
display: flex;
margin-top: 2rem;
margin-bottom: 10px;
font-size: 18px;
& >li>img{
  width: 26px;
  margin-right: 7px;
}
`
let MenuBoxLi=styled.div`
margin-right: 5rem;
font-size: 18px;

color:${props=>props.over||props.over1?"#a554f3":"#c6c7cc"};
display: flex;
& img{
  width:25px;
  margin-right:10px;
}
`

