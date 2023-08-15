import "../../css/mypage.css";
import "../../css/common.css";
import { useEffect, useState } from "react";
import FollowLi from "./component/followList/followLi";
import PostCard from "../commondcomponent/postCard";

function MyPageIndex() {
  // 컨텐츠 메뉴 바꿈
  const [block, setBlock] = useState(false);
  const onClickFollow = () => {
    setBlock(!block);
  };
  const [follow, setFollow] = useState(false);
  const clickFollow = () => {
    setFollow(!follow);
  };
  // 메뉴 마우스 오버 리브설정
  const [over, setOver] = useState(false);
  const [over1, setOver1] = useState(false);
  const mouseOver = () => {
    setOver(true);
  };
  const mouseLeave = () => {
    setOver(false);
  };
  const mouseOver1 = () => {
    setOver1(true);
  };
  const mouseLeave1 = () => {
    setOver1(false);
  };
  // 모달창 설정
  const [phone, setPhone] = useState("");
  const [addr, setAddr] = useState("");
  const phoneChange = (e) => {
    setPhone(e.target.value);
  };
  const addrChange = (e) => {
    setAddr(e.target.value);
  };
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);

  const profileEdit = () => {
    setEdit(!edit);
  };
  const profileModal = () => {
    setEdit(!edit)
  };
  return (
    <>
      <div className="myPageWrap">
        {/* <!--마이페이지 사이드메뉴  --> */}
        <div className="myPageSideMenu">
          <img src="/img/user.png" alt="" />
          <div className="myPageUserInfo">
            <h1>Jeon,Tae Hyeon</h1>
            <p>Code Magician</p>
            <div className="myPageFollows" onClick={onClickFollow}>
              <img src="/img/users.png" alt="" />
              <span>4followers</span>
              <span>4followings</span>
            </div>
          </div>
          <div>
            <button className="greyBtn editBtn" onClick={profileEdit}>
              Edit Profile
            </button>
          </div>
        </div>
        {/* <!-- 마이페이지 컨텐츠 --> */}
        <div className="myPageContents">
          <div className={block ? "statistics none" : "statistics block"}>
            <div className="userStatistics">
              <img src="/img/user.png" alt="" />
              <div>
                <table
                  className="userStatisticsTable"
                  style={{ minWidth: "480px" }}
                >
                  <colgroup>
                    <col style={{ width: "60%" }} />
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "20%" }} />
                  </colgroup>
                  <thead className="css-1z08gdi">
                    <tr className="css-1ojb0xa">
                      <th className="css-1ev8h34">레벨</th>
                      <th colspan="2" className="css-1ev8h34">
                        문제
                      </th>
                    </tr>
                  </thead>
                  <tbody className="css-1d9xc1d">
                    <tr className="css-1ojb0xa">
                      <td className="bronze css-1cnxww9">
                        <b>Bronze</b>
                      </td>
                      <td className="css-1qm6zmr">
                        <b>1,831</b>
                      </td>
                      <td className="css-1qm6zmr">
                        <span className="css-stcnmb">14.2%</span>
                      </td>
                    </tr>
                    <tr className="css-1ojb0xa">
                      <td className="silver css-1cnxww9">
                        <b>Silver</b>
                      </td>
                      <td className="css-1qm6zmr">
                        <b>2,156</b>
                      </td>
                      <td className="css-1qm6zmr">
                        <span className="css-stcnmb">16.7%</span>
                      </td>
                    </tr>
                    <tr className="css-1ojb0xa">
                      <td className="gold css-1cnxww9">
                        <b>Gold</b>
                      </td>
                      <td className="css-1qm6zmr">
                        <b>2,601</b>
                      </td>
                      <td className="css-1qm6zmr">
                        <span className="css-stcnmb">20.2%</span>
                      </td>
                    </tr>
                    <tr className="css-1ojb0xa">
                      <td className="platinum css-1cnxww9">
                        <b>Platinum</b>
                      </td>
                      <td className="css-1qm6zmr">
                        <b>2,907</b>
                      </td>
                      <td className="css-1qm6zmr">
                        <span className="css-stcnmb">22.6%</span>
                      </td>
                    </tr>
                    <tr className="css-1ojb0xa">
                      <td className="diamond css-1cnxww9">
                        <b>Diamond</b>
                      </td>
                      <td className="css-1qm6zmr">
                        <b>2,058</b>
                      </td>
                      <td className="css-1qm6zmr">
                        <span className="css-stcnmb">16.0%</span>
                      </td>
                    </tr>
                    <tr className="css-1ojb0xa">
                      <td className="ruby css-1cnxww9">
                        <b>Ruby</b>
                      </td>
                      <td className="css-1qm6zmr">
                        <b>368</b>
                      </td>
                      <td className="css-1qm6zmr">
                        <span className="css-stcnmb">2.9%</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="postListBox">
              {/* <!-- 포스트네비 --> */}
              <div className="postListNav">
                <div>
                  <p>Best Post</p>
                  <hr />
                </div>
                <div>
                  <p>See All</p>
                  <hr className="seeAllHr" />
                </div>
              </div>
              {/* <!-- 포스트라이드 --> */}
              <div className="postSlide">
                <ul className="postList">
                  {/* <!-- 포스트카드 --> */}
                  <PostCard />
                  <PostCard />
                  <PostCard />
                  <PostCard />
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- follow리스트페이지 --> */}
          <div className={block ? "follow block" : "follow none"}>
            <div className="followNav">
              <div className="filter">
                <div className="filterBox">
                  <p
                    onMouseOver={mouseOver}
                    onMouseLeave={mouseLeave}
                    onClick={clickFollow}
                    className={over ? "change" : ""}
                  >
                    Follower
                  </p>
                  <p
                    onMouseOver={mouseOver1}
                    onMouseLeave={mouseLeave1}
                    onClick={clickFollow}
                    className={over1 ? "change" : ""}
                  >
                    Following
                  </p>
                </div>
                <hr />
              </div>
              {/* <!-- 리스트부분 --> */}
              <div>
                {follow ? (
                  <ul className="followList ">
                    <FollowLi follow="follow" />
                  </ul>
                ) : (
                  <ul className="followList ">
                    <FollowLi follow="unfollow" />
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- 마이페이지 수정 모달 --> */}
        <div className={edit ? "myPageModal" : "none"}>
          <div
            className={modal ? "none" : "myPageModalBack"}
            onClick={profileModal}
          ></div>
          <div className={modal ? "none" : "myPageModalContent"}>
            <p>Name</p>
            <input type="text" placeholder="Jeon,Tae Hyeon" />
            <p>Pronouns</p>
            <div className="pronouns">
              <img src="/img/phone.png" alt="" />
              <input
                type="text"
                placeholder="010-22-222"
                onChange={phoneChange}
              />
            </div>
            <div className="pronouns">
              <img src="/img/building.png" alt="" />
              <input
                type="text"
                placeholder="서울시 송파구"
                onChange={addrChange}
              />
            </div>
            <div className="myPageModalBtnBox">
              <button className="purpleBtn saveBtn">save</button>
              <button className="greyBtn closeBtn">close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyPageIndex;
