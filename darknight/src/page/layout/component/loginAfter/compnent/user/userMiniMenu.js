import { Link } from "react-router-dom";
import { useState } from "react";
function UserMiniMenu(){
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
    const [select,setSelect]=useState('')
    const overLi=(type)=>{
      console.log(1)
      setSelect(type)
    }
    return(
<div className="userMiniMenu">
          <ul>
            {minuMenuList.map((list)=>(
              <Link to={list.link}><li className={`${select==list.type?'select':''} `}  onMouseOver={overLi}>{list.title}</li><hr></hr></Link>
            ))}
          </ul>
        </div>
        )
}
export default UserMiniMenu;
