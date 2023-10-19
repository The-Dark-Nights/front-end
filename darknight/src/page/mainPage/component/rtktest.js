import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RtkTest(){
 const cnt=useSelector(state=>state.counter)
const dispatch=useDispatch();
    const minus=()=>{
     dispatch(minus())
    }
    const plus=()=>{
      dispatch(plus())
    }
    return(
        <div>
            <button onClick={minus}>-</button>
            {cnt.value}
            <button onClick={plus}>+</button>
        </div>
    )
}