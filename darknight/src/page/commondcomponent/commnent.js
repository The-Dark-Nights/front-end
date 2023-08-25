import { useState } from "react";
import style from "../postDetailPage/postDetail.module.css"
function Comment({clickReport}){
  const [miniUser,setMiniUser]=useState(false);
  const clickUser=()=>{
    setMiniUser(!miniUser)
  }
  const [heart,setHeart]=useState(false);
  const clickHeart=()=>{
    setHeart(!heart)
  }
    return(
        <>
            <li>
                <img src="/img/user.png" alt="" />
                <div>
                  <div className={style.userReport}>
                    <h2 onClick={clickUser}>CodeJungle</h2>
                    
                    <img src={heart?"/img/heart.png":"/img/empty_heart.png"}alt="" onClick={clickHeart}/>
                    <img src="/img/siren.png" alt="" onClick={clickReport}/>
                  </div>
                  <ul className={miniUser?`${style.commentUserDetailBox}`:"none"}>
                    <li>1:1대화</li>
                    <hr />
                    <li>쪽지 보내기</li>
                    <hr />
                    <li>회원정보</li>
                  </ul>
                  <p className={style.commentDate}>June 11,2023</p>
                  <p className={style.commentContent}>
                    Satisfied conveying a dependent contented he gentleman
                    agreeable do be. Warrant private blushes removed an in
                    equally totally if. Delivered dejection necessary objection
                    do Mr prevailed. Mr feeling does chiefly cordial in do.
                  </p>
                </div>
              </li>
        </>
    )
}
export default Comment;