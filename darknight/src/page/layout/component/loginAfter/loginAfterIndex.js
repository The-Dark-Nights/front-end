
import styled from "styled-components";
import AlarmBell from "./compnent/alarm/alarmbell";

import UserBox from "./compnent/user/userBox";
function LoginAfterIndex() {
  return(
  <LoginAfter>
    <LoginBox>
      <img src="/img/search.png" alt="" />
      <AlarmBell/>
      <UserBox/>
    </LoginBox>
  </LoginAfter>)
}
export default LoginAfterIndex;

let LoginAfter=styled.div`
margin-top: 2.5rem;
`
let LoginBox=styled.div`
display: flex;
& >img{
  width: 30px;
  height: 30px;
}`

