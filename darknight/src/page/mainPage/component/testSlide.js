import { useState } from "react";
import styled from "styled-components";
import PostCard from "../../commondcomponent/postCard";
// import "./Homepage.scss";

const slides = [
  { color: "red", target: "#" },
  { color: "orange", target: "#" },
  { color: "yellow", target: "#" },
  { color: "green", target: "#" },
  { color: "blue", target: "#" },
  { color: "navy", target: "#" },
  { color: "purple", target: "#" },
];

export default function Homepage() {
  const [animate, setAnimate] = useState(true);
  const onStop = () => setAnimate(false);
  const onRun = () => setAnimate(true);
  const [size, setSize] = useState(false);
  return (
    <div className="wrapper">
      <SlideContainer>
        <SlideWrapper onMouseEnter={onStop} onMouseLeave={onRun}>
          <SlideOrigin animate={animate}>
            {/* {slides.map((s, i) => (
              <SlideList
              //    key={i} className={i % 2 === 0 ? "big" : "small"}
              >
                <div className="item" style={{ background: s.color }}></div>
              </SlideList>
            ))} */}
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </SlideOrigin>
          <SlideClone animate={animate}>
            {/* {slides.map((s, i) => (
              <SlideList
              //   key={i} className={i % 2 === 0 ? "big" : "small"}
              >
                <div className="item" style={{ background: s.color }}></div>
              </SlideList>
            ))} */}
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </SlideClone>
        </SlideWrapper>
      </SlideContainer>
    </div>
  );
}
let SlideContainer = styled.div`
  overflow: hidden;
`;
let SlideWrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
`;
let SlideOrigin = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  position: relative;
  /* border-top: 1px solid #bbb;
  border-bottom: 1px solid #bbb; */
  padding: 40px 0;
  animation: 20s linear infinite normal none running infiniteAnimation1;
  @keyframes infiniteAnimation1 {
    0% {
      transform: translateX(0%);
    }
    50% {
      transform: translateX(-100%);
    }
    50.1% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  animation-play-state: ${(props) => (props.animate ? "paused" : "")};
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* background-color: #bbb; */
    z-index: 1;
  }
`;
let SlideClone = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  position: relative;
  /* border-top: 1px solid #bbb;
  border-bottom: 1px solid #bbb; */
  padding: 40px 0;
  /* animation: 10s linear infinite infiniteAnimation2; */
  animation: 20s linear infinite normal none running infiniteAnimation1;
  animation-play-state: ${(props) => (props.animate ? "paused" : "")};
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* background-color: #bbb; */
    z-index: 1;
  }
  /* @keyframes infiniteAnimation2 {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }*/

  @keyframes infiniteAnimation1 {
    0% {
      transform: translateX(0%);
    }
    50% {
      transform: translateX(-100%);
    }
    50.1% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;
// let SlideList = styled.li`
//   margin: 0 80px;
//   cursor: pointer;
//   z-index: 2;
//   transition: 0.3s;
//   transform: scale(1);
//   width: 100%;
//   height: 100%;
//   &:hover {
//     transform: scale(0.98);
//     &::after {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 0;
//       bottom: 0;
//       right: 0;
//       width: 100%;
//       height: 100%;
//       background-color: rgba(0, 0, 0, 0.2);
//     }
//   }
//   & div {
//   }
// `;
