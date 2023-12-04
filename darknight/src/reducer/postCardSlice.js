import { createSlice } from "@reduxjs/toolkit";

let postCardSlice = createSlice({
  name: "postCard",
  initialState: {
    // title: "1",
    // userId: "1",
    // userImg: "1",
    // mainText: "",
    // postImg: "1",
    // like: 0,
    // commentCnt: 0,
  },
  reducers: {
    postCardRead: (state, actions) => {
      console.log(1);
      state = actions.payload;
    },
  },
});
export const { postCardRead } = postCardSlice.actions;
export default postCardSlice.reducer;
