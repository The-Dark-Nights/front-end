
import AlarmBell from "./compnent/alarm/alarmbell";

import UserBox from "./compnent/user/userBox";
function LoginAfterIndex() {
  return(
  <div className="loginAfter">
    <div className="loginBox">
      <img src="/img/search.png" alt="" />
      <AlarmBell/>
      <UserBox/>
    </div>
  </div>)
}
export default LoginAfterIndex;
