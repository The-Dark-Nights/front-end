import { createSlice } from "@reduxjs/toolkit";

let roadMapCardSlice=createSlice({
    name:'roadMapCard',
    initialState:{
        // title:'1',
        // userId:'1',
        // userImg:'1',
        // roadMapImg:'1',
        // like:0,
        // commentCnt:0
},
    reducers:{
        roadMapCardRead:(state,actions)=>{
            console.log(1)
        //     state={
        //  title:actions.payload.title,
        //     userId:actions.payload.userId,
        //  userImg:actions.payload.userImg,
        //    roadMapImg:actions.payload.roadMapImg,
        //  like:actions.payload.like,
        //  commentCnt:actions.payload.commentCnt,}
        state=actions.payload
        }
    }
})
export const {roadMapCardRead}=roadMapCardSlice.actions;
export default roadMapCardSlice.reducer;