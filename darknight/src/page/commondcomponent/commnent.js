import { useState } from "react";
// import style from "../postDetailPage/postDetail.module.css";
import styled from "styled-components";
function Comment({ clickReport }) {
  const [miniUser, setMiniUser] = useState(false);
  const clickUser = () => {
    setMiniUser(!miniUser);
  };
  const [heart, setHeart] = useState(false);
  const clickHeart = () => {
    setHeart(!heart);
  };
  return (
    <>
      <li>
        <img src="/img/user.png" alt="" />
        <div>
          <UserReport>
            <h2 onClick={clickUser}>CodeJungle</h2>

            <img
              src={heart ? "/img/heart.png" : "/img/empty_heart.png"}
              alt=""
              onClick={clickHeart}
            />
            <img src="/img/siren.png" alt="" onClick={clickReport} />
          </UserReport>
          <CommentUserDetailBox miniUser={miniUser}>
            <li>1:1대화</li>
            <hr />
            <li>쪽지 보내기</li>
            <hr />
            <li>회원정보</li>
          </CommentUserDetailBox>
          <CommentDate>June 11,2023</CommentDate>
          <CommentContent>
            Satisfied conveying a dependent contented he gentleman agreeable do
            be. Warrant private blushes removed an in equally totally if.
            Delivered dejection necessary objection do Mr prevailed. Mr feeling
            does chiefly cordial in do.
          </CommentContent>
        </div>
      </li>
    </>
  );
}
export default Comment;
let UserReport = styled.div`
display: flex;
&>h2{
  margin-right: 40px;
    cursor: pointer;
}
&>img{
  width: 20px;
    height: 20px;
    margin-right: 20px;
    margin-top: 10px;
        cursor: pointer;
}
`;
let CommentUserDetailBox = styled.ul`
display: ${props=>props.miniUser?'block':'none'};
  position: absolute;
  left: 480px;
  z-index: 1;
  width: 106px;
  height: 90px;
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 15px;
  line-height: 27px;
  font-size: 13px;
  text-align: center;
`;
let CommentDate = styled.p`
font-size: 13px;
    margin: 10px 0;
`;
let CommentContent = styled.p`
  margin-bottom: 20px;
`;
