import { useRef, useState } from "react";
import styled from "styled-components";
import RoadMapCard from "../../commondcomponent/roadMapCard";
import ItemsCarousel from 'react-items-carousel'
import next from "../../../asset/img/next.png";
import prev from "../../../asset/img/prev.png";
function TestSlide2() {
  const slides = [
    { color: "red", target: "#" },
    { color: "orange", target: "#" },
    { color: "yellow", target: "#" },
    { color: "green", target: "#" },
    { color: "blue", target: "#" },
    { color: "navy", target: "#" },
    { color: "purple", target: "#" },
  ];
  const [activeItemIndex, setActiveItemIndex] = useState(0); 
  const TRUE = true;
  const [gutter, setGutter] = useState(10);
  const [numOfCards, setNumOfCards] = useState(4);
  return (
  <>
    <Wrap>
      <div>
      <ItemsCarousel
          chevronWidth={50}
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
          {slides.map((v) => (
            <li style={{ backgroundColor: v.color }}>{v.color}</li>
          ))}
       </ItemsCarousel>
      </div>
    </Wrap>
 
  </>
);
          }
export default TestSlide2;

let Wrap = styled.div`
  /* border: 1px solid;
  display: flex;
  overflow: hidden;
  & > div {
    width: 1400px;
    overflow: hidden;
  }
  & > div > div {
    padding: 0px;
    display: flex;
    transition: all 1s;
  } */
  & > div > div>div>div>div > li {
    width: 330px;
    height: 350px;

  }
`;
let MoveBtn=styled.button`
background-color: transparent;
border: none;
padding-bottom: 65px;
`