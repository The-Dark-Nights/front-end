import styled from "styled-components";
import RoadMapCard from "../../commondcomponent/roadMapCard";
import { Link } from "react-router-dom";

import { useEffect, useRef, useState } from "react";
import next from "../../../asset/img/next.png";
import prev from "../../../asset/img/prev.png";
import ItemsCarousel from "react-items-carousel";
import { useDispatch, useSelector } from "react-redux";
import { useEdges } from "reactflow";
import { roadMapCardRead } from "../../../reducer/roadMapCardSlice";
import { getRoadMapCard } from "../../../apis/api";
function MainRadMap() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const TRUE = true;
  const [gutter, setGutter] = useState(10);
  const [numOfCards, setNumOfCards] = useState(3);
  const roadMapCard = useSelector((state) => state.roadMapCard);
  const dispatch = useDispatch();
  const [roadMapList, setRoadMapList] = useState([]);

  useEffect(() => {
    let roadMap = async () => {
      const result = await getRoadMapCard().then((res) => res);
      // console.log(result.data);
      setRoadMapList(result.data);
    };
    roadMap();
  }, []);
  return (
    <div className="roadMapListBox">
      {/* <!-- 로드맵네비 --> */}
      <RoadMapListNav>
        <div>
          <p>See All</p>
          <SeeAllHr />
        </div>

        <Link to="/roadMap">
          <div>
            <p>See All</p>
            <SeeAllHr />
          </div>
        </Link>
      </RoadMapListNav>
      {/* <!-- 로드맵슬라이드 --> */}
      <RoadMapWrap>
        <RoadMapSlide>
          <ItemsCarousel
            chevronWidth={100}
            gutter={gutter}
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
            {roadMapList.map((v, index) => (
              <RoadMapCard v={v} index={index} />
            ))}
          </ItemsCarousel>
        </RoadMapSlide>
      </RoadMapWrap>
    </div>
  );
}

export default MainRadMap;
let RoadMapListNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  & > div > p {
    font-weight: bold;
  }
  & > div > hr {
    width: 150px;
    border: 2px solid black;
    margin-top: 10px;
  }
`;
let SeeAllHr = styled.hr`
  width: 100px;
  border: 2px solid black;
  margin-top: 10px;
`;

let RoadMapWrap = styled.div`
  margin-top: 40px;
  width: 100%;
`;
let RoadMapSlide = styled.div`
  width: 1500px;
  /* overflow: hidden;
  display: flex;  */
`;
let RoadMapList = styled.ul`
  /* padding: 0px;
  display: flex;
  transition: all 1s ease; */
`;
let MoveBtn = styled.button`
  background-color: transparent;
  border: none;
  margin: 0 10px;
`;
