import { Link } from "react-router-dom";
import "../../css/roadMapDetail.css";
import "../../css/common.css";

function RoadMapCard() {
  return (
    <li className="roadMapCard">
      <Link to='/roadMapDetail'>
      <div className="roadMapTitleBox">
        <h3>Custorm Roadmap Name</h3>
        <div className="userInfo">
          <img src="/img/user.png" alt="" />
          <p>Code Juggler</p>
        </div>
        <hr />
      </div>

      <div className="roadMapImg">
        <img src="/img/reactflow.png" alt="" />
        <hr />
      </div>

      <div className="roadMapComment">
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
