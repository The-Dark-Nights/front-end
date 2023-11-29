// import style from "./post.module.css";
// import "../../css/common.css";
import PostCard from "../commondcomponent/postCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { API_BASE_URL } from "../../constants";
import axios from "axios";

function PostPageIndex() {
  const [over,setOver]=useState(false);
  const [over1,setOver1]=useState(false);
  const [posts, setPosts]=useState([]);

  
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
  const navigate=useNavigate();
  const clickWrite=()=>{navigate('/writingPage')};

  useEffect(() => {
    axios.get(API_BASE_URL+"/v1/post/all",{
      headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
  })
    .then((res) => 
    setPosts(res.data.reverse()))
  }
  ,[])

  return (
    <>
      <PostContainerTitle>
        <Filter>
          <FilterBox over={over} over1={over1}>
            <p onMouseOver={mouseOver} onMouseLeave={mouseLeave} >recent</p>
            <p onMouseOver={mouseOver1} onMouseLeave={mouseLeave1} >popular</p>
            <select>
              <option value="" >weekly</option>
              <option value="">monthly</option>
            </select>
          </FilterBox>
          <hr />
        </Filter>
        <h1>Post</h1>
        <WriteBtn onClick={clickWrite}>Write</WriteBtn>
      </PostContainerTitle>
      <div className="postListBox">
            {/* <!-- 포스트라이드 --> */}
            <PostSlide>
              <PostListWrap>
                {/* <!-- 포스트카드 --> */}
                {posts.map((post)=> (
                  <PostCard key={post.id} title={post.title} content={post.content}/>
                ))}
              </PostListWrap>
            </PostSlide>
          </div>
    </>
  );
}
export default PostPageIndex;

let PostContainerTitle=styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: baseline;
  /* justify-content: center; */
  &>h1{
    margin-left: 28%;
  }
  &>button{
    margin-left: 37%; 
  }


`
let Filter=styled.div`
  color: #c6c7cc;
`
let FilterBox=styled.div`
  display: flex;
  width: 270px;
  & p{
    margin-right: 30px;
  margin-bottom: 10px;
  
  }
  & p:first-child{
    margin-left: 10px;
    color: ${props=>props.over?'#a554f3':""};
  }
  & p:nth-child(2){
    color: ${props=>props.over1?'#a554f3':""};
  }
  &>select{
    color: #c6c7cc;
  width: 70px;
  height: 25px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 -1px 0px rgba(0, 0, 0, 0.02);
  padding-left: 3px;
  }
`
let WriteBtn=styled.button`

width: 100px;
  height: 30px;
  border-radius: 10px;
  color: white;
  background-color: #a554f3;
  border: none;
`
let PostSlide=styled.div`
 margin-top: 5%;
`
let PostListWrap=styled.ul`
 display: flex;
  flex-wrap: wrap;
  justify-content: left;
  &>li{
    list-style : none;
  }
`