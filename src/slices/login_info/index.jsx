import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    name:"",
    email:"",
    password:"",
    id:""
}
const login_info_slice = createSlice({
    name:"loginInfoName",
    initialState: intialState,
    reducers:{
        setName: (state,action)=>{
            console.log(action)
            return {...state , name: action.payload}
        },
        setPassword: (state,action)=>{
            console.log(action)
            return {...state ,password: action.payload}},
        setEmail: (state,action)=>{console.log(action)
            return {...state ,email: action.payload}},
        setId: (state,action)=>{console.log(action.payload)
            return {...state ,id: action.payload}},
        clear:(state)=>{console.log(state)
        return{intialState}}
    }
})

export const {setPassword,setEmail,setName , setId , clear } = login_info_slice.actions;
export default login_info_slice.reducer;

