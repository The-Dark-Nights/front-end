import { useCallback, useState } from "react"
import SideMenuCard from "./sidemenuCard";
import style from '../../roadMapDetail/roadMapDetail.module.css'
function SideMenu({sideOpen}){
    const [follow,setFollow]=useState(false);
    const clickFollow=()=>{
        console.log(1)
        setFollow(!follow)
    }
    const [select,setSelect]=useState('')
    const titleList=[
        {
            type:"mypost",
            title:"MyPost"
        },
        {
            type:"following",
            title:"Following"
        },
        {
            type:"popular",
            title:"Popular"
        },
    ]
    const ClickLi=useCallback((type)=>{
        setSelect(type);
    },[select])
    return(
        <>
         {/* <!-- 로드맵 사이드메뉴 --> */}
      <div className={sideOpen?`${style.roadMapDetailSideMenu}`:"none"}>
        <div className={style.sideMenuTitle}>
          <div>
            <button className={style.bigfollowBtn} onClick={clickFollow}>
              <div className={follow?`${style.greenColor}`:""}></div>
              <p>Follow</p>
            </button>
          </div>
          <h2>HTML</h2>
          <div className={style.filterBox}>
            {titleList.map((list)=>(
                <p onClick={()=>ClickLi(list.type)} className={`${select===list.type?`${style.clickP}`:""}`}>{list.title}</p>
            ))}
          </div>
        </div>
        <ul className={style.miniPostList}>
        <SideMenuCard/>
        </ul>
      </div>
        </>
    )
}
export default SideMenu