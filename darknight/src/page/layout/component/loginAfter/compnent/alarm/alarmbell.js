import { useState } from "react";
import AlarmList from "./alarmList";

function AlarmBell(){
  const [click,setClick]=useState(false);
    const bollenClick=()=>{
        setClick(!click)
    }
    return(
        <div className="alarmBell">
        <div className="alarmBellImg" onClick={bollenClick}>
          <img src="img/bell.png" alt="" />
          <p>12</p>
        </div>
        {click?
        <div className="alarmModal">
          <div className="alarmModalTitle">
            <p>Alarm</p>
            <img src="/img/setting.png" alt="" />
          </div>
          <hr />
          <div>
            <ul>              
            <AlarmList/>
            </ul>
          </div>
        </div>:<></>}
      </div>
    )
}
export default AlarmBell;