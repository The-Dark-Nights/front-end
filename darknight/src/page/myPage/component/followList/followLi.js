import style from '../../../myPage/mypage.module.css'

function FollowLi({follow}){
    return(
        <>
          <li>
                    <div>
                      <img src="/img/user.png" alt="" />
                      <div>
                        <div className={style.user}>
                          <p>name</p>
                          <span>nickname</span>
                        </div>
                        <div className={style.userGroup}>
                          <span>greeting</span>
                        </div>
                      </div>
                    </div>
                    <div className={style.unfollowBtnBox}>
                      <button className={style.greyBtn}>{follow}</button>
                    </div>
                  </li>
        </>
    )
}
export default FollowLi;