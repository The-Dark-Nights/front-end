
import ReportModal from "../commondcomponent/reportModal/reportModal";
import { useState } from "react";
import {Link} from 'react-router-dom'
import Comment from "../commondcomponent/commnent";
import styled from "styled-components";

function PostDetailIndex(){
  const [report,setReport]=useState(false);
  const clickReport=()=>{
    setReport(!report)
  }
  const [user,setUser]=useState(false)
    const clickUser=()=>{
        setUser(!user)
    }
  const [followBtn,setFollowBtn]=useState(false);
  const clickBtnColor=()=>{
    setFollowBtn(!followBtn)
  }
    return(
        <>
            {/* <!-- 포스트디테일 타이틀 --> */}
        <PostDetailTitl>
        <h1>Custom RoadMap Name</h1>
        <UserInfo>
          <ImgBox>
            <img src="/img/user.png" alt="" />
            <div >
              <FollowBtn followBtn={followBtn} onClick={clickBtnColor}>
                <div className='greenColor'></div>
                <p>Follow</p>
              </FollowBtn>
            </div>
          </ImgBox>
          <UserInfoBox>
            <UserName onClick={clickUser}>Code Juggler</UserName>
            <UserFollows>
              <Link to="/mypage">
              <img src="/img/users.png" alt="" />
              <span>4followers</span>
              <span>4followings</span>
              </Link>
            </UserFollows>
          </UserInfoBox>
          <UserDetailBox user={user}>
            <li>1:1대화</li>
            <hr />
            <li>쪽지 보내기</li>
            <hr />
            <li><Link to="/mypage">회원정보</Link></li>
          </UserDetailBox>
        </UserInfo>
      </PostDetailTitl>
    {/* //   <!-- 포스트디테일 컨텐츠 --> */}
      <PostDetailContents>
        <img src="/img/logo.png" alt="" />
        <p>
          JavaScript는 웹 페이지의 보조적인 기능을 수행하기 위해
          브라우저에서 동작하는 경량 프로그래밍 언어로서 1996년 넷스케이프
          커뮤니케이션즈에서 처음 개발되었다. 이어 마이크로소프트에서도
          JavaScript의 파생 버전인 JScript를 만들었는데 두 회사는 자사
          브라우저의 시장 점유율을 높이기 위해 자사 브라우저에서만 동작하는
          기능을 경쟁적으로 추가했다. 이는 크로스 브라우징 이슈-브라우저에
          따라 웹 페이지가 정상적으로 동작하지 않는 현상-을 야기했고 표준화
          된 자바스크립트의 필요성이 대두되었다. 컴퓨터 시스템의 표준을
          관리하는 비영리 표준화 기구인 ECMA 인터네셔널에서 1997년
          ECMA-262라 불리는 표준화 된 자바스크립트 초판(ECMAScript 1) 사양이
          완성되었고, 상표권 문제로 자바스크립트는 ECMAScript로 명명되었다.
          이후 1999년 ECMAScript 3(ES3)이 공개 되고, 10년만인 2009년에
          출시된 ECMAScript 5(ES5)는 HTML5와 함께 출현한 표준 사양이다.
          2015년에 공개된 ECMAScript 6(ECMAScript 2015, ES6)는 let/const
          키워드, 화살표 함수, 클래스 등과 같이 범용 프로그램이 언어로서
          갖춰야 할 기능들을 대거 도입하는 큰 변화가 있었다.
        </p>
        <form>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Please write a comment..."
          ></textarea>

          <div>
            <TextAreaSubmit>Submit</TextAreaSubmit>
          </div>
        </form>
        <hr />
      </PostDetailContents>
      <PostDetailComment>
            <ul>
           
      <Comment clickReport={clickReport}/>
           
            </ul>
          </PostDetailComment>
      <ReportModal report={report} setReport={setReport}/>
      </>
    )
}
export default PostDetailIndex;

let PostDetailTitl=styled.div`
  text-align: center;
  margin-top: 100px;
  & h1{
    font-size: 58px;
  }
`
let UserInfo=styled.div`
    display: flex;
    position: relative;
   margin-left: 70%;
    margin-top: 30px;
`
let ImgBox=styled.div`

    & img{
      width: 50px;
    }
`

let FollowBtn=styled.button`
  width: 50px;
    height: 20px;
   cursor: pointer;
   border-radius: 5px;
   background-color: white;
   & div{
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: grey;
    margin-left: 3px;
    position: relative;
    top: 6px;
   }
   & p{
    font-size: 10px;
    margin-left: 5px;
    position: relative;
    top: -2px;
   }
   & .greenColor{
    background-color:${props=>props.followBtn?'#1bb51b':''};
   }
`

let UserInfoBox=styled.div`
    margin-left: 40px;
`
let UserName=styled.div`
 font-size: 27px;
    font-weight: bold;
    cursor: pointer;
`
let UserFollows=styled.div`
 color:  #c6c7cc;
   font-size: 12px;
   margin-top: 15px;
   cursor: pointer;
&>a>img{
  width: 18px;
    position: relative;
    top: 4px;
    right: 5px;
}
  &>a>span{
    margin-right: 10px;
  }
`
let UserDetailBox=styled.ul`
display: ${props=>props.user?'block':'none'};
 position: absolute;
    right: 73%;
    width: 106px;
    height: 90px;
    background-color: white;
    border: 1px solid #d9d9d9;
    border-radius: 15px;
    z-index: 1;
    top: 37%;
    line-height: 27px;
    font-size: 13px;
`
let PostDetailContents=styled.div`
  text-align: center;
  & img{
    width: 60%;
    margin-top: 100px;
  }
  & p{
    margin: 50px;
    text-align: left;
    line-height: 35px;
  }
  & form>textarea{
    width: 800px;
    margin-top: 50px;
    border: none;
    background-color: #E8DFE7;
    resize: none;
    padding: 20px;
    font-size: 15px;
  }
  &>form>textarea::placeholder{
    font-size: 15px;
  }
`
let TextAreaSubmit=styled.button`
 width:100px ;
    height: 30px;
    font-size: 15px;
margin-bottom: 50px;
position: relative;
right: -400px;
top: 20px;
border-radius: 10px;
color: white;
background-color: #a554f3;
border: none;`
let PostDetailComment=styled.div`
&>ul>li{
  display: flex;
    margin: 50px 0;
    padding: 0 50px;
    box-shadow: 0px 8px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.02);
}
&>ul>li>img{
  width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 50px;
}
`

