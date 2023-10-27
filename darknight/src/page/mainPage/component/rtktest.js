import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { down, up } from "../../../reducer/counterSlice";

export default function RtkTest(){
 const cnt=useSelector(state=>state.cnt.value)
const dispatch=useDispatch();
    const minus=()=>{
     dispatch(up())
    }
    const plus=()=>{
      dispatch(down())
    }
    return(
        <div>
            <button onClick={minus}>-</button>
            {cnt}
            <button onClick={plus}>+</button>
        </div>
    )
}