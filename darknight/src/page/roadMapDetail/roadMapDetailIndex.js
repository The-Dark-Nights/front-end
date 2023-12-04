import { useState, useEffect } from "react";
import ReportModal from "../commondcomponent/reportModal/reportModal";
import Comment from "../commondcomponent/commnent";
import { Link, useParams } from "react-router-dom";
import ReadReactflowWrap from "../commondcomponent/readReactflow";
import SideMenu from "../commondcomponent/sidemenu/sidemenu";
import style from "./roadMapDetail.module.css";
import styled from "styled-components";
import axios from "axios";
import { API_BASE_URL } from "../../constants";

function RoadMapDetailIndex() {
  const [report, setReport] = useState(false);
  const [roadmapDetail, setRoadmapDetail] = useState(null);
  

  const {roadMapId} = useParams();

  const clickReport = () => {
    setReport(!report);
  };
  const [user, setUser] = useState(false);
  const clickUser = () => {
    setUser(!user);
  };
  const [followBtn, setFollowBtn] = useState(false);
  const clickBtnColor = () => {
    setFollowBtn(!followBtn);
  };
  const [sideOpen, setSideOpen] = useState(false);
  

  useEffect(()=>{
    
    axios.get( API_BASE_URL + `/v1/roadmap/${roadMapId}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }

    ).then(res => 
      {setRoadmapDetail(res.data)}
      )
      
    
    
    


  },[])

  return (
    <>
      {/* <!-- 로드맵디테일타이틀 시작 --> */}
      <RoadMapDetailTitle>
        <h1>{roadmapDetail?.title}</h1>
        <UserInfo>
          <ImgBox>
            <img src={roadmapDetail?.findMemberDTO?.profileImage} alt="" />
            <div>
              <FollowBtn followBtn={followBtn} onClick={clickBtnColor}>
                <div className='greenColor'></div>
                <p>Follow</p>
              </FollowBtn>
            </div>
          </ImgBox>
          <UserInfoBox>
            <UserName onClick={clickUser}>
              {roadmapDetail?.findMemberDTO?.name}
            </UserName>
            <UserFollows>
              <img src="/img/users.png" alt="" />
              <Link to="/mypage">
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
            <li>
              <Link to="/mypage">회원정보</Link>
            </li>
          </UserDetailBox>
        </UserInfo>
      </RoadMapDetailTitle>
      <SideMenu sideOpen={sideOpen} />
      {/* <!-- 로드맵 컨텐츠 --> */}
      <RoadMapDetailContents>
        <ReadReactflowWrap setSideOpen={setSideOpen} sideOpen={sideOpen} roadMapDetail={roadmapDetail} />
        <form>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Please write a comment..."
          ></textarea>
          <div>
            <TextareaSubmit>Submit</TextareaSubmit>
          </div>
        </form>
        <hr />
      </RoadMapDetailContents>
      {/* <!-- 로드맵리뷰 --> */}
      <RoadMapDetailComment>
        <ul>
          <Comment clickReport={clickReport} />
          <ReportModal report={report} setReport={setReport} />
        </ul>
      </RoadMapDetailComment>
    </>
  );
}
export default RoadMapDetailIndex;

let RoadMapDetailTitle = styled.div`
  text-align: center;
  margin-top: 100px;
  & > h1 {
    font-size: 58px;
  }
`;
let UserInfo = styled.div`
  display: flex;
  position: relative;
  margin-left: 68%;
  margin-top: 30px;
`;
let ImgBox = styled.div`
  & > img {
    width: 50px;
  }
`;

let FollowBtn = styled.button`
  width: 50px;
  height: 20px;
  border-radius: 5px;
  background-color: white;
  & > div {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: grey;
    margin-left: 5px;
    position: relative;
    top: 7px;
  }
  & > p {
    font-size: 10px;
    margin-left: 5px;
    position: relative;
    top: -2px;
  }
  & > .greenColor {
    background-color:${props=>props.followBtn?'#1bb51b':""} ;
  }
`;
let UserInfoBox = styled.div`
  margin-top: 8px;
  margin-left: 40px;
`;
let UserName = styled.div`
  font-size: 27px;
  font-weight: bold;
  cursor: pointer;
`;
let UserFollows = styled.div`
  color: #c6c7cc;
  font-size: 12px;
  margin-top: 15px;
  cursor: pointer;
  & > img {
    width: 18px;
    position: relative;
    top: 4px;
    margin-right: 2px;
  }
  & > a > span {
    margin-right: 10px;
  }
`;
let UserDetailBox = styled.ul`
display: ${props=>props.user?'block':'none'};
  position: absolute;
  right: 73%;
  width: 106px;
  height: 90px;
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 15px;
  z-index: 2;
  top: 37%;
  line-height: 27px;
  font-size: 13px;
`;
let RoadMapDetailContents = styled.div`
  text-align: center;
  & > img {
    width: 80%;
    margin-top: 100px;
    z-index: -10;
  }
  & > form > textarea {
    width: 800px;
    margin-top: 50px;
    border: none;
    background-color: #e8dfe7;
    resize: none;
    padding: 20px;
    font-size: 15px;
  }
  & > form > textarea::placeholder {
    font-size: 15px;
  }

`;
let TextareaSubmit=styled.button`
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
border: none;
`
let RoadMapDetailComment = styled.div`
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
