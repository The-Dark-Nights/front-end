import styled from "styled-components";
import RoadMapCard from '../../commondcomponent/roadMapCard'
import { Link } from "react-router-dom";
function MainRadMap(){
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
        <RoadMapSlide>
          <RoadMapList>
            {/* <!-- 로드맵카드 --> */}
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
width: 2000px;

overflow: hidden;
display: flex;
`