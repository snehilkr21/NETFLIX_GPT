import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {},
    reducers : {
        addUser : (state,action) => {
            state.initialState = action.payload
        },
        removeUser : (state,action) => {
            state.initialState = {}
        }
    }
})

export const {addUser,removeUser} = userSlice.actions
export default userSlice.reducer