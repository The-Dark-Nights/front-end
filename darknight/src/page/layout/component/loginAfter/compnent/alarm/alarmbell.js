import { useState } from "react";
import AlarmList from "./alarmList";
import styled from "styled-components";

function AlarmBell(){
  const [click,setClick]=useState(false);
    const bollenClick=()=>{
        setClick(!click)
        console.log(1)
    }
    return(
        <div className="alarmBell">
        <AlarmBellImg  onClick={bollenClick}>
          <img src="img/bell.png" alt="" />
          <p>12</p>
        <AlarmModal clickModal={click}>
          <AlamModalTitle>
            <p>Alarm</p>
            <img src="/img/setting.png" alt="" />
          </AlamModalTitle>
          <hr />
          <div>
            <ul>              
            <AlarmList/>
            </ul>
          </div>
        </AlarmModal>
        </AlarmBellImg>
   
      </div>
    )
}
export default AlarmBell;
let AlarmBellImg=styled.div`
width: 100px;
display: flex;
margin-left: 50px;
position: relative;
& >img{
  width: 30px;
  height: 30px;
}
& >p{
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  text-align: center;
  position: relative;
  right: 11px;
  top: -8px;
}
`
let AlarmModal=styled.div`
position: absolute;
right: 77%;
top: 96%;
width: 400px;
background-color: white;
border: 1px solid #d9d9d9;
border-radius: 15px;
z-index: 20;
display:${props=>props.clickModal?"block":"none"};
`
let AlamModalTitle=styled.div`
display: flex;
justify-content: space-between;
margin: 20px 0;
& >img{
  width: 25px;
  margin-right: 20px;
}
& >p{
  font-size: 20px;
  margin-left: 20px;
}
`
// let AlarmList=styled.div``
