import { configureStore } from '@reduxjs/toolkit'
import login_info_slice from '../slices/login_info/index'
import user_info_slice from '../slices/user_info/index'
import teamReducer from '../slices/team_info/index'
// import teamReducer from './teamSlice';

const store = configureStore({
    reducer:{
        info: login_info_slice,
        member : user_info_slice,
        team: teamReducer
    }

})
 
export default store;