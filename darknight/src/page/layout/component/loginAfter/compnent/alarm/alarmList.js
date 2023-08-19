import { Link } from "react-router-dom";

function AlarmList() {
  return (
    // map
    <li className="alarmList">
      <Link to='/postDetail'>
      <div>
        <p>???가 html 카테고리에 글을 올렸습니다</p>
      </div>
      <p>1일전</p>
      </Link>
    </li>
  );
}
export default AlarmList;
