import UserMiniMenu from "./userMiniMenu";
import React, { useState } from 'react';
function UserBox(){
    const [click,setClick]=useState(false);
    const bollenClick=()=>{
        setClick(!click)
    }
    return(
        <div className="userImg">
        <img src="/img/user.png" alt="" className="userProfileImg" onClick={bollenClick}/>
        <img src="/img/downarrow.png" alt="" className="downarrow" onClick={bollenClick}/>
        {click?<UserMiniMenu/>:<></>} 
      </div>
    )
}
export default UserBox;