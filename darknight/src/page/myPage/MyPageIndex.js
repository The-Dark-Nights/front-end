import style from "./mypage.module.css";
import "../../css/common.css";
import { useEffect, useState } from "react";
import FollowLi from "./component/followList/followLi";
import PostCard from "../commondcomponent/postCard";
import EditModal from "./component/editModal/editModal";


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


  const [edit, setEdit] = useState(false);
  
  const profileEdit = () => {
    setEdit(!edit);
  };

  return (
    <>
      <div className={style.myPageWrap}>
        {/* <!--마이페이지 사이드메뉴  --> */}
        <div className={style.myPageSideMenu}>
          <img src="/img/user.png" alt="" />
          <div className={style.myPageUserInfo}>
            <h1>Jeon,Tae Hyeon</h1>
            <p>Code Magician</p>
            <div className={style.myPageFollows} onClick={onClickFollow}>
              <img src="/img/users.png" alt="" />
              <span>4followers</span>
              <span>4followings</span>
            </div>
          </div>
          <div>
            <button className={style.editBtn} onClick={profileEdit}>
              Edit Profile
            </button>
          </div>
        </div>
        {/* <!-- 마이페이지 컨텐츠 --> */}
        <div className={style.myPageContents}>
          <div className={block ? "none" : `${style.statistics}`}>
            <div className={style.userStatistics}>
              <img src="/img/user.png" alt="" />
              <div>
                <table
                  className={style.userStatisticsTable}
                 
                >
                  <colgroup>
                    <col  className={style.col1} />
                    <col  className={style.col2}/>
                    <col  className={style.col2}/>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>레벨</th>
                      <th>
                        문제
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <b>Bronze</b>
                      </td>
                      <td>
                        <b>1,831</b>
                      </td>
                      <td >
                        <span>14.2%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Silver</b>
                      </td>
                      <td>
                        <b>2,156</b>
                      </td>
                      <td>
                        <span>16.7%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Gold</b>
                      </td>
                      <td>
                        <b>2,601</b>
                      </td>
                      <td>
                        <span>20.2%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Platinum</b>
                      </td>
                      <td>
                        <b>2,907</b>
                      </td>
                      <td>
                        <span>22.6%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Diamond</b>
                      </td>
                      <td>
                        <b>2,058</b>
                      </td>
                      <td>
                        <span>16.0%</span>
                      </td>
                    </tr>
                    <tr>
                      <td >
                        <b>Ruby</b>
                      </td>
                      <td >
                        <b>368</b>
                      </td>
                      <td >
                        <span>2.9%</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={style.postListBox}>
              {/* <!-- 포스트네비 --> */}
              <div className={style.postListNav}>
                <div>
                  <p>Best Post</p>
                  <hr />
                </div>
                <div>
                  <p>See All</p>
                  <hr className={style.seeAllHr} />
                </div>
              </div>
              {/* <!-- 포스트라이드 --> */}
              <div className={style.postSlide}>
                <ul className={style.postList}>
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
          <div className={block ? `${style.follow}` : "none"}>
            <div className={style.followNav}>
              <div className={style.filter}>
                <div className={style.filterBox}>
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
                  <ul className={style.followList}>
                    <FollowLi follow="follow" />
                  </ul>
                ) : (
                  <ul className={style.followList}>
                    <FollowLi follow="unfollow" />
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
                <EditModal edit={edit} setEdit={setEdit}/>
      </div>
    </>
  );
}
export default MyPageIndex;
