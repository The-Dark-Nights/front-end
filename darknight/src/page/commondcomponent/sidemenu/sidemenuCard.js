import { Link } from "react-router-dom";
// import style from '../../roadMapDetail/roadMapDetail.module.css'
import styled from "styled-components";
function SideMenuCard(){
    return(
        <>
          <li>
            <Link to='/postDetail'>
            <MiniPostUser>
              <h3>HTML이란...</h3>
              <p>username</p>
            </MiniPostUser>

            <MiniPostContent>
              An HTML element is defined by a start tag, some content, and an
              end tag:
            </MiniPostContent>
            <MiniPostComment>
              <img src="/img/comment.png" alt="" />
              <span>11</span>
              <img src="/img/heart.png" alt="" className='heartIcon' />
              <span>3</span>
            </MiniPostComment>
            </Link>
          </li>
        </>
    )
}
export default SideMenuCard;
let MiniPostUser=styled.div`
 display: flex;
    justify-content: space-between;
    align-items: flex-end;
    &>h3{
      margin-top: 10px;
    }
    &>p{
      font-size: 13px;
    }
`
let MiniPostContent=styled.div`
 width: 280px;
    height: 50px;
    overflow: hidden;
    margin-top: 20px;
    font-size: 15px;
`
let MiniPostComment=styled.div`
  margin-top: 20px;
    position: relative;
    left: 180px;
    &>img{
      width: 12px;
    margin-left: 20px;
    margin-right: 3px;
    }
    &>.heartIcon{
      width: 17px;
    position: relative;
    top: 2px;
    }
`