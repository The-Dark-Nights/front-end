import style from "./main.module.css";
import "../../css/common.css";
import PostCard from "../commondcomponent/postCard";
import RoadMapCard from "../commondcomponent/roadMapCard";
import { Link } from "react-router-dom";
function MainPageIndex() {
  return (
    <>
      <div className="roadMapListBox">
        {/* <!-- 로드맵네비 --> */}
        <div className={style.roadMapListNav}>
          <div>
            <p>BestRoadMap</p>
            <hr />
          </div>
          <Link to="/roadMap">
            <div>
              <p>See All</p>
              <hr className={style.seeAllHr} />
            </div>
          </Link>
        </div>
        {/* <!-- 로드맵슬라이드 --> */}
        <div className={style.roadMapSlide}>
          <ul className={style.roadMapList}>
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
        <div class={style.postListNav}>
          <div>
            <p>Best Post</p>
            <hr />
          </div>
          <Link to="/post">
            <div>
              <p>See All</p>
              <hr class={style.seeAllHr} />
            </div>
          </Link>
        </div>
        {/* <!-- 포스트라이드 --> */}
        <div class={style.postSlide}>
          <ul class={style.postList}>
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
