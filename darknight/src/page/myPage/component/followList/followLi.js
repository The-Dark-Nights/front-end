function FollowLi({follow}){
    return(
        <>
          <li>
                    <div>
                      <img src="/img/user.png" alt="" />
                      <div>
                        <div className="user">
                          <p>name</p>
                          <span>nickname</span>
                        </div>
                        <div className="userGroup">
                          <span>greeting</span>
                        </div>
                      </div>
                    </div>
                    <div className="unfollowBtnBox">
                      <button className="greyBtn">{follow}</button>
                    </div>
                  </li>
        </>
    )
}
export default FollowLi;