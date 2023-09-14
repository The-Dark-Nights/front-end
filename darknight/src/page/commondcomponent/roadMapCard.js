import { Link } from "react-router-dom";

import styled from "styled-components";
function RoadMapCard() {
  return (
    <RoadMapCardWrap>
      <Link to="/roadMapDetail">
        <RoadMapTitleBox>
          <h3>Custorm Roadmap Name</h3>
          <UserInfo>
            <img src="/img/user.png" alt="" />
            <p>Code Juggler</p>
          </UserInfo>
          <hr />
        </RoadMapTitleBox>

        <RoadMapImg>
          <img src="/img/reactflow.png" alt="" />
          <hr />
        </RoadMapImg>

        <RoadMapComment>
          <div>
            <img src="/img/comment.png" alt="" />
            <p>11</p>
          </div>
          <div>
            <img src="/img/heart.png" alt="" />
            <p>3</p>
          </div>
        </RoadMapComment>
      </Link>
    </RoadMapCardWrap>
  );
}
export default RoadMapCard;

let RoadMapCardWrap = styled.li`
  width: 400px;
  height: 350px;
  box-shadow: 0px 8px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.02);
  margin-bottom: 80px;
  margin-right: 5%;
  padding: 10px 20px;
`;
let RoadMapTitleBox = styled.div`
  & > h3 {
    margin-bottom: 5px;
  }
`;
let UserInfo = styled.div`
  display: flex;
  margin-bottom: 5px;
  & > img {
    width: 25px;
    margin-right: 15px;
  }
`;
let RoadMapImg = styled.div`
  text-align: center;
  & > img {
    width: 290px;
  }
`;
let RoadMapComment = styled.div`
  display: flex;
  margin-top: 15px;
  & img {
    width: 20px;
    margin-right: 5px;
  }
  & > div {
    display: flex;
    margin-right: 10px;
  }
`;
