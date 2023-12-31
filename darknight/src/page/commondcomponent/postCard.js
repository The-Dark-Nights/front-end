import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../constants";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import styled from "styled-components";

function PostCard({title, content, postId, userId}) {

  const [userInfo, setUserInfo] = useState(null);

  let reg = /[`~!@#$%^&*()_|+\-=?;:'"<>\{\}\[\]\\\/ ]/gim;
  let regexPostcontent = "";
  if(content){
  regexPostcontent = content.replace(reg,"");
  }
  
  let postDetailUrl = `/postDetail/${postId}`;

  useEffect(()=>{
    axios.get(API_BASE_URL+`/v1/member/${userId}`,{
      headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
  })
  .then(res=>
    setUserInfo(res.data))
  },[])

  return (
    <PostCardWrap>
      <Link to={postDetailUrl}>
        <PostImg>
          <img src="/img/logo.png" alt="" />
          <hr />
        </PostImg>
        <PostContents>
          
          <h3>{title}</h3>
          <p>
            {regexPostcontent}
            
            {/* 홈 페이지 타이틀 변경하기  #post-2 .entry-title visibility:
            hidden; line-height: 0; #post-2 .entry-title:before visibility:
            visible; content: '사이트를 방문해주셔서 감사합니다!'; line-height:
            1.2em;*/}
          </p>
          <hr />
        </PostContents>
        <PostComment>
          <div>
            <img src={userInfo?.profileImage} alt="" />
          </div>
          <UserName>by pm</UserName>
          <PostCommentBox>
            <div>
              <img src="/img/comment.png" alt="" />
              <p>11</p>
            </div>
            <div>
              <img src="/img/heart.png" alt="" />
              <p>3</p>
            </div>
          </PostCommentBox>
        </PostComment>
      </Link>
    </PostCardWrap>
  );
}
export default PostCard;
let PostCardWrap=styled.li`
width: 300px;
  height: 400px;
  box-shadow: 0px 8px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.02);
  margin-bottom: 80px;
  margin-right: 5%;
  padding: 10px 20px;
  border-radius: 10px;
`
let PostImg=styled.div`
& img{

  width: 200px;
}
`
let PostContents=styled.div`
margin-top: 10px;
&h3{
  margin-bottom: 20px;
}
&p{
  margin-bottom: 10px;
}
`
let PostComment=styled.div`
display: flex;
margin-top: 15px;
& img{
  width: 20px;
  margin-right: 5px;
}
&>div{
  display: flex;
  margin-right: 10px;
}
`
let UserName=styled.div`
width: 100px;
overflow: hidden;
`
let PostCommentBox=styled.div`
margin-left: 80px;
&>div{
  display: flex;
}
`
