// import style from "./mypage.module.css";
// import "../../css/common.css";
import { useEffect, useState } from "react";
import FollowLi from "./component/followList/followLi";
import PostCard from "../commondcomponent/postCard";
import EditModal from "./component/editModal/editModal";
import styled from "styled-components";
import MyPageSide from "./component/mypageSide";
import MyPageChart from "./component/mypageChart";


function MyPageIndex() {
  // 컨텐츠 메뉴 바꿈
  const [block, setBlock] = useState(false);
  const onClickFollow = () => {
    setBlock(!block);
  };
  const [follow, setFollow] = useState(false);
  const clickFollow = () => {
    setFollow(!follow);
  };
  // 메뉴 마우스 오버 리브설정
  const [over, setOver] = useState(false);
  const [over1, setOver1] = useState(false);
  const mouseOver = () => {
    setOver(true);
  };
  const mouseLeave = () => {
    setOver(false);
  };
  const mouseOver1 = () => {
    setOver1(true);
  };
  const mouseLeave1 = () => {
    setOver1(false);
  };


  const [edit, setEdit] = useState(false);
  
  const profileEdit = () => {
    setEdit(!edit);
  };

  return (
    <>
      <MypageWrap >
        {/* <!--마이페이지 사이드메뉴  --> */}
       <MyPageSide profileEdit={profileEdit} onClickFollow={onClickFollow}/>
        {/* <!-- 마이페이지 컨텐츠 --> */}
        <MyPageContents>
          <div className={block ? "none" : ``}>
           <MyPageChart/>
            <PostListBox>
              {/* <!-- 포스트네비 --> */}
              <PostListNav>
                <div>
                  <p>Best Post</p>
                  <hr />
                </div>
                <div>
                  <p>See All</p>
                  <SeeAllHr />
                </div>
              </PostListNav>
              {/* <!-- 포스트라이드 --> */}
              <PostSlide>
                <PostLIst>
                  {/* <!-- 포스트카드 --> */}
                  <PostCard />
                  <PostCard />
                  <PostCard />
                  <PostCard />
                </PostLIst>
              </PostSlide>
            </PostListBox>
          </div>
          {/* <!-- follow리스트페이지 --> */}
          <Follow block={block}>
            <FollowNav>
              <Filter>
                <FilterBox >
                  <Change1 over={over}
                    onMouseOver={mouseOver}
                    onMouseLeave={mouseLeave}
                    onClick={clickFollow}
                   
                  >
                    Follower
                  </Change1>
                  <Change2 over1={over1}
                    onMouseOver={mouseOver1}
                    onMouseLeave={mouseLeave1}
                    onClick={clickFollow}
                    
                  >
                    Following
                  </Change2>
                </FilterBox>
                
              </Filter>
              {/* <!-- 리스트부분 --> */}
              <div>
                {follow ? (
                  <FollowList>
                    <FollowLi follow="follow" />
                  </FollowList>
                ) : (
                  <FollowList>
                    <FollowLi follow="unfollow" />
                  </FollowList>
                )}
              </div>
            </FollowNav>
          </Follow>
        </MyPageContents>
                <EditModal edit={edit} setEdit={setEdit}/>
      </MypageWrap>
    </>
  );
}
export default MyPageIndex;
let MypageWrap=styled.div`
width: 110%;
height: 100%;
margin-bottom: 0px; 
display: flex;
`
let MyPageContents=styled.div`
width: 70%;
margin-left: 100px;

`

let PostListBox=styled.div`
margin-bottom: 40px;
`
let PostListNav=styled.div`
display: flex;
justify-content: space-between;
margin-top: 10%;
width: 100%;
&> div> p{
  font-weight: bold;
}
& >div>hr{
  width: 150px;
  border: 2px solid black;
  margin-top: 10px;
}
`
let SeeAllHr=styled.hr`
width: 100px;
`
let PostSlide=styled.div`
margin-top: 40px;
overflow: hidden;
`
let PostLIst=styled.ul`
overflow: hidden;
display: flex;
`

let Follow=styled.div`
width:${props=>props.block?"80%":""};
display:${props=>props.block?"block":"none"};
`
 let FollowNav=styled.div`` 
let Filter=styled.div`
color: #c6c7cc;
&>hr{
  width: 27%;
}
`
let FilterBox=styled.div`

  display: flex;
    width: 270px;
    margin-top: 50px;
 &>p{
  margin-right: 30px;
    margin-bottom: 10px;
    
 }  
 & >p:first-child{
  margin-left: 20px;
 } 
    `
let Change1=styled.p`
color:${props=>props.over1||props.over?'#a554f3':'#c6c7cc'};
`
let Change2=styled.p`
color:${props=>props.over1||props.over?'#a554f3':'#c6c7cc'};`

let FollowList=styled.ul`
margin-top: 100px;
&>li{
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 8px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.02);
  border-radius: 5px;
  margin: 20px 0;
  padding: 20px 0;
  align-items: center;
}
& >li>div{
  display: flex;
  margin-left: 20px;
}
& >li>div>img{
  width: 70px;
  border-radius: 50%;
  margin-right: 50px;
}
`