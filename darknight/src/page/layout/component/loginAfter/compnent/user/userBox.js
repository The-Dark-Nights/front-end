import styled from "styled-components";
import UserMiniMenu from "./userMiniMenu";
import React, { useState } from 'react';
function UserBox(){
    const [click,setClick]=useState(false);
    const bollenClick=()=>{
        setClick(!click)
    }
    return(
        <UserImg>
        <UserProfileImg src="/img/user.png" alt=""  onClick={bollenClick}/>
        <DownArrow src="/img/downarrow.png" alt="" onClick={bollenClick}/>
        {click?<UserMiniMenu click={click} setClick={setClick}/>:<></>} 
      </UserImg>
    )
}
export default UserBox;

let UserImg=styled.div`
position: relative;
top: -20px;
`
let UserProfileImg=styled.img`
width: 70px;
border-radius: 50%;
background-color: grey;
`
let DownArrow=styled.img`
width: 20px;
`