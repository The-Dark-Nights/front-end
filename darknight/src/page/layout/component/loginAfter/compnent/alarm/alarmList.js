import { Link } from "react-router-dom";
import styled from "styled-components";

function AlarmList() {
  return (
    // map
    <AlarmListWrap>
      <Link to='/postDetail'>
      <div>
        <p>???가 html 카테고리에 글을 올렸습니다</p>
      </div>
      <p>1일전</p>
      </Link>
    </AlarmListWrap>
  );
}
export default AlarmList;
let AlarmListWrap=styled.li`
margin: 20px;
line-height: 30px;
margin-bottom: 20px;
& div >p{
  font-size: 18px;
}
& >p{
  font-size: 12px;
  float: right;
}

`

