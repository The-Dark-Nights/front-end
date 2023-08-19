import { useState } from "react";
import ReportModal from "../commondcomponent/reportModal/reportModal";
import Comment from "../commondcomponent/commnent";
import {Link} from 'react-router-dom'
import ReadReactflowWrap from "../commondcomponent/readReactflow";
import SideMenu from "../commondcomponent/sidemenu/sidemenu";



function RoadMapDetailIndex() {
  const [report, setReport] = useState(false);
  const clickReport = () => {
    setReport(!report);
  };
  const [user, setUser] = useState(false);
  const clickUser = () => {
    setUser(!user);
  };
  const [followBtn, setFollowBtn] = useState(false);
  const clickBtnColor = () => {
    setFollowBtn(!followBtn);
  };
  const [sideOpen,setSideOpen]=useState(false);
 
  return (
    <>
      {/* <!-- 로드맵디테일타이틀 시작 --> */}
      <div className="roadMapDetailTitle">
        <h1>Custom RoadMap Name</h1>
        <div className="userInfo">
          <div className="imgBox">
            <img src="/img/user.png" alt="" />
            <div className="followBtnBox">
              <button className="whiteBtn followBtn" onClick={clickBtnColor}>
                <div className={followBtn ? "greenColor" : ""}></div>
                <p>Follow</p>
              </button>
            </div>
          </div>
          <div className="userInfoBox">
            <div className="userName" onClick={clickUser}>Code Juggler</div>
            <div className="userFollows">
              <img src="/img/users.png" alt="" />
              <Link to="/mypage">
              <span>4followers</span>
              <span>4followings</span>
              </Link>
            </div>
          </div>
          <ul className={user ? "userDetailBox" : "none"}>
            <li>1:1대화</li>
            <hr />
            <li>쪽지 보내기</li>
            <hr />
            <li>
              <Link to="/mypage">회원정보</Link>
            </li>
          </ul>
        </div>
      </div>
     <SideMenu sideOpen={sideOpen}/>
      {/* <!-- 로드맵 컨텐츠 --> */}
      <div className="roadMapDetailContents">
      <ReadReactflowWrap setSideOpen={setSideOpen} sideOpen={sideOpen}/>
        <form>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Please write a comment..."
          ></textarea>
          <div>
            <button className="purpleBtn textareaSubmit">Submit</button>
          </div>
        </form>
        <hr />
      </div>
      {/* <!-- 로드맵리뷰 --> */}
      <div className="roadMapDetailCommnet">
        <ul>
          <Comment clickReport={clickReport} />
          <ReportModal report={report} setReport={setReport} />
        </ul>
      </div>
    </>
  );
}
export default RoadMapDetailIndex;
