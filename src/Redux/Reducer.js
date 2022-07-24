import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from './Fakedata'

export const userSlice = createSlice({
    name: "users",
    initialState: {value: [] },

    
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload);
        },

        deleteUser: (state, action)=>{
            state.value = state.value.filter((user)=> user.id !== action.payload.id);
        },
        
       updateUser : (state, action) =>{
            state.value.map((user)=>
            user.id === action.payload.id
            ? Object.assign(user, action.payload)
            : user
            )
       }
    }
});

export const {addUser, deleteUser, updateUser} = userSlice.actions
export default userSlice.reducer;



