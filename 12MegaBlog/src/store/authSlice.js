import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userData:null
};

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload.userData;
        },
       // ye login , logout functions ko actions bolte hai
        logout:(state)=>{
            state.status=false;
            state.userData=null;
        },

    }
})

export const {login,logout}=authSlice.actions;
export default authSlice.reducer;