import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './reducer/counterSlice';
import roadMapCardSlice from './reducer/roadMapCardSlice';
import postCardSlice from './reducer/postCardSlice';

let store=configureStore({
    reducer:{
        cnt:counterSlice,
        roadMapCard:roadMapCardSlice,
        postCard:postCardSlice
    }
})
export default store;