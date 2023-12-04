import { useCallback, useState } from "react";
import SideMenuCard from "./sidemenuCard";
// import style from "../../roadMapDetail/roadMapDetail.module.css";
import styled from "styled-components";
function SideMenu({ sideOpen }) {
  const [follow, setFollow] = useState(false);
  const clickFollow = () => {
    console.log(1);
    setFollow(!follow);
  };
  const [select, setSelect] = useState("");
  const titleList = [
    {
      type: "mypost",
      title: "MyPost",
    },
    {
      type: "following",
      title: "Following",
    },
    {
      type: "popular",
      title: "Popular",
    },
  ];
  const ClickLi = useCallback(
    (type) => {
      setSelect(type);
    },
    [select]
  );
  return (
    <>
      {/* <!-- 로드맵 사이드메뉴 --> */}
      <RoadMapDetailSideMenu sideOpen={sideOpen}>
        <SideMEnuTitle>
          <div>
            <BigfollowBtn follow={follow} onClick={clickFollow}>
              <div className='greenColor'></div>
              <p>Follow</p>
            </BigfollowBtn>
          </div>
          <h2>HTML</h2>
          <FilterBox>
            {titleList.map((list) => (
              <p
                onClick={() => ClickLi(list.type)}
                className={`${select === list.type ? 'clickP' : ""}`}
              >
                {list.title}
              </p>
            ))}
          </FilterBox>
        </SideMEnuTitle>
        <MiniPostList>
          <SideMenuCard />
        </MiniPostList>
      </RoadMapDetailSideMenu>
    </>
  );
}
export default SideMenu;

let RoadMapDetailSideMenu = styled.div`
display: ${props=>props.sideOpen?'block':'none'};
  width: 20%;
  height: 163vh;
  box-shadow: 0px 8px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.02);
  position: absolute;
  top: 116px;
  right: 0px;
  z-index: 5;
  background-color: white;
  transition: all 1s;
`;
let SideMEnuTitle = styled.div`
  margin: 40px;
`;
let BigfollowBtn = styled.button`
  width: 100px;
  height: 30px;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 5px;
  background-color: white;
  & > .greenColor {
    background-color: ${props=>props.follow?"#1bb51b":""};
  }
  & > div {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: grey;
    margin-left: 10px;
    position: relative;
    top: 7px;
  }
  & > p {
    font-size: 12px;
    margin-left: 5px;
    position: relative;
    top: -5px;
  }
`;
let FilterBox = styled.div`
  display: flex;
  width: 270px;
  margin: 0 auto;
  margin-top: 30px;
  & > p {
    margin-right: 30px;
    margin-bottom: 10px;
    color: #868e96;
    cursor: pointer;
  }
  & > .clickP {
    color: black;
    font-weight: bold;

    border-bottom: 3px solid black;
  }
  & > p:first-child {
    margin-left: 10px;
  }
`;
let MiniPostList = styled.ul`
  & > li {
    width: 300px;
    border-radius: 10px;
    margin: 0 auto;
    padding: 10px;
    box-shadow: 0px 8px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.02);
  }
`;
