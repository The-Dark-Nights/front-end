import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

function UserMiniMenu({click,setClick}){
    const minuMenuList=[
      {type:'profile',
      title:'My Profile',
    link:'/mypage'},
      {type:'drafts',
      title:'Drafts',
      link:'/mypage'},
      {type:'liked',
      title:'Liked',
      link:'/mypage'},
      {type:'logout',
      title:'Logout',
      link:'/mypage'},
    ];
    const [select,setSelect]=useState(false)
    const overLi=(type)=>{
 
      setClick(!click)
    }
    return(
<UserMiniMenuWrap clickSelect={select} >
          <ul>
            {minuMenuList.map((list)=>(
              <Link to={list.link}><hr/><li clickSelect={select} click={setClick} onClick={overLi}>{list.title}</li></Link>
            ))}
          </ul>
        </UserMiniMenuWrap>
        )
}
export default UserMiniMenu;

let UserMiniMenuWrap=styled.div`
position: absolute;
right: 10%;
width: 200px;
background-color: white;
border: 1px solid #d9d9d9;
border-radius: 15px;
z-index: 2;
display:${props=>props.clickSelect?"block":"none"}
overflow: hidden;

& >ul >a >li{
  margin: 10px;

}

`
