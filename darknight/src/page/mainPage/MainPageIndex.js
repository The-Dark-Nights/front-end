import "../../css/main.css";
import "../../css/common.css";
import PostCard from "../commondcomponent/postCard";
import RoadMapCard from "../commondcomponent/roadMapCard";
import { Link } from "react-router-dom";
function MainPageIndex() {
  return (
    <>
      <div className="roadMapListBox">
        {/* <!-- 로드맵네비 --> */}
        <div className="roadMapListNav">
          <div>
            <p>BestRoadMap</p>
            <hr />
          </div>
          <Link to="/roadMap">
            <div>
              <p>See All</p>
              <hr className="seeAllHr" />
            </div>
          </Link>
        </div>
        {/* <!-- 로드맵슬라이드 --> */}
        <div className="roadMapSlide">
          <ul className="roadMapList">
            {/* <!-- 로드맵카드 --> */}
            <RoadMapCard />
            <RoadMapCard />
            <RoadMapCard />
            <RoadMapCard />
          </ul>
        </div>
      </div>

      {/* <!-- 포스트리스트 --> */}
      <div class="postListBox">
        {/* <!-- 포스트네비 --> */}
        <div class="postListNav">
          <div>
            <p>Best Post</p>
            <hr />
          </div>
          <Link to="/post">
            <div>
              <p>See All</p>
              <hr class="seeAllHr" />
            </div>
          </Link>
        </div>
        {/* <!-- 포스트라이드 --> */}
        <div class="postSlide">
          <ul class="postList">
            {/* <!-- 포스트카드 --> */}
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </ul>
        </div>
      </div>
    </>
  );
}
export default MainPageIndex;
