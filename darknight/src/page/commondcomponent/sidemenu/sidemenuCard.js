import { Link } from "react-router-dom";

function SideMenuCard(){
    return(
        <>
          <li>
            <Link to='/postDetail'>
            <div className="miniPostUser">
              <h3>HTML이란...</h3>
              <p>username</p>
            </div>

            <div className="miniPostContent">
              An HTML element is defined by a start tag, some content, and an
              end tag:
            </div>
            <div className="miniPostComment">
              <img src="/img/comment.png" alt="" />
              <span>11</span>
              <img src="/img/heart.png" alt="" className="heartIcon" />
              <span>3</span>
            </div>
            </Link>
          </li>
        </>
    )
}
export default SideMenuCard;