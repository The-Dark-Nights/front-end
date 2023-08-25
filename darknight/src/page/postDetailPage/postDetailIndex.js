import style from "./postDetail.module.css";
import "../../css/common.css";
import ReportModal from "../commondcomponent/reportModal/reportModal";
import { useState } from "react";
import {Link} from 'react-router-dom'
import Comment from "../commondcomponent/commnent";

function PostDetailIndex(){
  const [report,setReport]=useState(false);
  const clickReport=()=>{
    setReport(!report)
  }
  const [user,setUser]=useState(false)
    const clickUser=()=>{
        setUser(!user)
    }
  const [followBtn,setFollowBtn]=useState(false);
  const clickBtnColor=()=>{
    setFollowBtn(!followBtn)
  }
    return(
        <>
            {/* <!-- 포스트디테일 타이틀 --> */}
        <div className={style.postDetailTitle}>
        <h1>Custom RoadMap Name</h1>
        <div className={style.userInfo}>
          <div className={style.imgBox}>
            <img src="/img/user.png" alt="" />
            <div className={style.followBtnBox}>
              <button className={style.followBtn }onClick={clickBtnColor}>
                <div className={followBtn?`${style.greenColor}`:""}></div>
                <p>Follow</p>
              </button>
            </div>
          </div>
          <div className={style.userInfoBox}>
            <div className={style.userName} onClick={clickUser}>Code Juggler</div>
            <div className={style.userFollows}>
              <Link to="/mypage">
              <img src="/img/users.png" alt="" />
              <span>4followers</span>
              <span>4followings</span>
              </Link>
            </div>
          </div>
          <ul className={user?`${style.userDetailBox}`:"none"}>
            <li>1:1대화</li>
            <hr />
            <li>쪽지 보내기</li>
            <hr />
            <li><Link to="/mypage">회원정보</Link></li>
          </ul>
        </div>
      </div>
    {/* //   <!-- 포스트디테일 컨텐츠 --> */}
      <div className={style.postDetailContents}>
        <img src="/img/logo.png" alt="" />
        <p>
          JavaScript는 웹 페이지의 보조적인 기능을 수행하기 위해
          브라우저에서 동작하는 경량 프로그래밍 언어로서 1996년 넷스케이프
          커뮤니케이션즈에서 처음 개발되었다. 이어 마이크로소프트에서도
          JavaScript의 파생 버전인 JScript를 만들었는데 두 회사는 자사
          브라우저의 시장 점유율을 높이기 위해 자사 브라우저에서만 동작하는
          기능을 경쟁적으로 추가했다. 이는 크로스 브라우징 이슈-브라우저에
          따라 웹 페이지가 정상적으로 동작하지 않는 현상-을 야기했고 표준화
          된 자바스크립트의 필요성이 대두되었다. 컴퓨터 시스템의 표준을
          관리하는 비영리 표준화 기구인 ECMA 인터네셔널에서 1997년
          ECMA-262라 불리는 표준화 된 자바스크립트 초판(ECMAScript 1) 사양이
          완성되었고, 상표권 문제로 자바스크립트는 ECMAScript로 명명되었다.
          이후 1999년 ECMAScript 3(ES3)이 공개 되고, 10년만인 2009년에
          출시된 ECMAScript 5(ES5)는 HTML5와 함께 출현한 표준 사양이다.
          2015년에 공개된 ECMAScript 6(ECMAScript 2015, ES6)는 let/const
          키워드, 화살표 함수, 클래스 등과 같이 범용 프로그램이 언어로서
          갖춰야 할 기능들을 대거 도입하는 큰 변화가 있었다.
        </p>
        <form>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Please write a comment..."
          ></textarea>

          <div>
            <button className={style.textareaSubmit}>Submit</button>
          </div>
        </form>
        <hr />
      </div>
      <div class={style.postDetailCommnet}>
            <ul>
           
      <Comment clickReport={clickReport}/>
           
            </ul>
          </div>
      <ReportModal report={report} setReport={setReport}/>
      </>
    )
}
export default PostDetailIndex;