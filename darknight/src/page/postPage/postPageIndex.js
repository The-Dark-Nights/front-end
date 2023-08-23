import "../../css/post.css";
import "../../css/common.css";
import PostCard from "../commondcomponent/postCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostPageIndex() {
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
  const navigate=useNavigate();
  const clickWrite=()=>{navigate('/writingPage')};

  return (
    <>
      <div class="postContainerTitle">
        <div class="filter">
          <div class="filterBox">
            <p onMouseOver={mouseOver} onMouseLeave={mouseLeave} className={over?"change":""}>recent</p>
            <p onMouseOver={mouseOver1} onMouseLeave={mouseLeave1}  className={over1?"change":""}>popular</p>
            <select>
              <option value="" >weekly</option>
              <option value="">monthly</option>
            </select>
          </div>
          <hr />
        </div>
        <h1>Post</h1>
        <button class="purpleBtn writeBtn" onClick={clickWrite}>Write</button>
      </div>
      <div class="postListBox">
            {/* <!-- 포스트라이드 --> */}
            <div class="postSlide">
              <ul class="postListWrap">
                {/* <!-- 포스트카드 --> */}
              <PostCard/>
              <PostCard/>
              <PostCard/>
              <PostCard/>
              <PostCard/>
              <PostCard/>
              <PostCard/>
              </ul>
            </div>
          </div>
    </>
  );
}
export default PostPageIndex;
