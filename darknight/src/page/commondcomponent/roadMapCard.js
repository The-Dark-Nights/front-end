import { Link } from "react-router-dom";
import "../roadMapDetail/roadMapDetail.module.css"
import "../../css/common.css";
import style from '../mainPage/main.module.css'
function RoadMapCard() {
  return (
    <li className={style.roadMapCard}>
      <Link to='/roadMapDetail'>
      <div className={style.roadMapTitleBox}>
        <h3>Custorm Roadmap Name</h3>
        <div className={style.userInfo}>
          <img src="/img/user.png" alt="" />
          <p>Code Juggler</p>
        </div>
        <hr />
      </div>

      <div className={style.roadMapImg}>
        <img src="/img/reactflow.png" alt="" />
        <hr />
      </div>

      <div className={style.roadMapComment}>
        <div>
          <img src="/img/comment.png" alt="" />
          <p>11</p>
        </div>
        <div>
          <img src="/img/heart.png" alt="" />
          <p>3</p>
        </div>
      </div>
      </Link>
    </li>
   
  );
}
export default RoadMapCard;
