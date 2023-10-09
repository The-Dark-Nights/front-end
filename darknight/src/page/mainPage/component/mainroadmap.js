import styled from "styled-components";
import RoadMapCard from '../../commondcomponent/roadMapCard'
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
function MainRadMap(){
  const TOTAL_SLIDES = 30;
  const imgLength = 1000;
  const [curruntIdx, setCurrentIdx] = useState(0);
    const [count, setCount] = useState(0);
    const slideRef = useRef(null);

    const nextSlide = () => {
        if (curruntIdx >= TOTAL_SLIDES) {
            setCurrentIdx(0);
        } else {
            setCurrentIdx((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (curruntIdx === 0) {
            setCurrentIdx(TOTAL_SLIDES);
        } else {
            setCurrentIdx((prev) => prev - 1);
        }
    };
    useEffect(() => {
      const timer = setInterval(() => {
          setCount((prev) => (prev === TOTAL_SLIDES ? 0 : prev + 1));
      }, 300);

      return () => {
          clearInterval(timer);
      };
  }, [count]);
    return(
        <div className="roadMapListBox">
        {/* <!-- 로드맵네비 --> */}
        <RoadMapListNav>
          <div>
            <p>BestRoadMap</p>
            <hr />
          </div>
          <Link to="/roadMap">
            <div>
              <p>See All</p>
              <SeeAllHr />
            </div>
          </Link>
        </RoadMapListNav>
        {/* <!-- 로드맵슬라이드 --> */}
        <RoadMapSlide >
          <RoadMapList ref={slideRef} count={count}>
            {/* <!-- 로드맵카드 --> */}
            <RoadMapCard />
            <RoadMapCard />
            <RoadMapCard />
            <RoadMapCard />
            <RoadMapCard />
            <RoadMapCard />
            <RoadMapCard />
            <RoadMapCard />
            <RoadMapCard />
            <RoadMapCard />
          </RoadMapList>
        </RoadMapSlide>
          
      </div>
    )
}
export default MainRadMap;
let RoadMapListNav=styled.div`
display: flex;
justify-content: space-between;
margin-top: 80px;
&>div>p{
  font-weight: bold;
}
&>div>hr{
  width: 150px;
  border: 2px solid black;
  margin-top: 10px;
}
`
let SeeAllHr=styled.hr`
width: 100px;
border: 2px solid black;
margin-top: 10px;
`

let RoadMapSlide=styled.div`
margin-top: 40px;
overflow: hidden;
`
let RoadMapList=styled.ul`
transition: ${(props) => (!props.count ? '' : 'all 1s ease-in-out')};
    transform: ${(props) => 'translateX(-' + props.count * 50 + 'px)'};
width: 2000px;

overflow: hidden;
display: flex;
`