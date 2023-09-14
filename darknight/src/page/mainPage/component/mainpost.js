import styled from "styled-components";
import PostCard from "../../commondcomponent/postCard";
import { Link } from "react-router-dom";

function MainPost(){
    return(
       
      <div class="postListBox">
      {/* <!-- 포스트네비 --> */}
      <PostListNav>
        <div>
          <p>Best Post</p>
          <hr />
        </div>
        <Link to="/post">
          <div>
            <p>See All</p>
            <SeeAllHr />
          </div>
        </Link>
      </PostListNav>
      {/* <!-- 포스트라이드 --> */}
      <PostSlide>
        <PostList>
          {/* <!-- 포스트카드 --> */}
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </PostList>
      </PostSlide>
    </div>
    )
}
export default MainPost;
let SeeAllHr=styled.hr`
width: 100px;
border: 2px solid black;
margin-top: 10px;

`
let PostListNav=styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10%;
  &>div>p{
    font-weight: bold;
  }
  &>div>hr{
    width: 150px;
    border: 2px solid black;
    margin-top: 10px;
  }
`
let PostSlide=styled.div`
margin-top: 40px;
overflow: hidden;
  margin-bottom: 80px;
`
let PostList=styled.ul`
width: 2000px;
overflow: hidden;
display: flex;
flex-wrap: nowrap;
`