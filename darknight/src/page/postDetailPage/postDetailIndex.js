import { API_BASE_URL } from "../../constants";
import axios from "axios";
import ReportModal from "../commondcomponent/reportModal/reportModal";
import { useState, useEffect } from "react";
import {Link, useParams} from 'react-router-dom'
import Comment from "../commondcomponent/commnent";
import styled from "styled-components";

function PostDetailIndex(){
  const [report,setReport]=useState(false);
  const [postData, setPostData] = useState(null);

  let { postId } = useParams();

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

  useEffect(() =>{
  axios.get(API_BASE_URL + `/v1/post/${postId}`,{
    headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }})
    .then(res => setPostData(res.data))
    }
    ,[])

    
    return(
        <>
            {/* <!-- 포스트디테일 타이틀 --> */}
        <PostDetailTitl>
        <h1>{postData?.title}</h1>
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
          {postData?.content}
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

