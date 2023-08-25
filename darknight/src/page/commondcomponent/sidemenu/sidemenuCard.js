import { Link } from "react-router-dom";
import style from '../../roadMapDetail/roadMapDetail.module.css'
function SideMenuCard(){
    return(
        <>
          <li>
            <Link to='/postDetail'>
            <div className={style.miniPostUser}>
              <h3>HTML이란...</h3>
              <p>username</p>
            </div>

            <div className={style.miniPostContent}>
              An HTML element is defined by a start tag, some content, and an
              end tag:
            </div>
            <div className={style.miniPostComment}>
              <img src="/img/comment.png" alt="" />
              <span>11</span>
              <img src="/img/heart.png" alt="" className={style.heartIcon} />
              <span>3</span>
            </div>
            </Link>
          </li>
        </>
    )
}
export default SideMenuCard;