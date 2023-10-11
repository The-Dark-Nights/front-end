import styled from "styled-components";
import PostCard from "../../commondcomponent/postCard";
import { Link } from "react-router-dom";
import ItemsCarousel from 'react-items-carousel'
import next from "../../../asset/img/next.png";
import prev from "../../../asset/img/prev.png";
import { useState } from "react";
function MainPost(){
  const [activeItemIndex, setActiveItemIndex] = useState(0); 
  const TRUE = true;
  const [gutter, setGutter] = useState(10);
  const [numOfCards, setNumOfCards] = useState(4);
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
      <ItemsCarousel
          chevronWidth={100}
          gutter={gutter}
          disableSwipe={TRUE}
          numberOfCards={numOfCards}
          slidesToScroll={numOfCards}
          outsideChevron={TRUE}
          activeItemIndex={activeItemIndex}
          infiniteLoop={TRUE}
          firstAndLastGutter={TRUE}
          requestToChangeActive={(value) => setActiveItemIndex(value)}
          rightChevron={
            <MoveBtn type="button">
              <img src={next} alt="" />
            </MoveBtn>
          }
          leftChevron={
            <MoveBtn type="button">
              <img src={prev} alt="" />
            </MoveBtn>
          }
        >
          {/* <!-- 포스트카드 --> */}
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </ItemsCarousel>
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
/* overflow: hidden; */
  margin-bottom: 80px;
`
let PostList=styled.ul`
width: 1500px;
/* overflow: hidden; */
display: flex;
flex-wrap: nowrap;
`
let MoveBtn=styled.button`
background-color: transparent;
border: none;
padding-bottom: 65px;
`