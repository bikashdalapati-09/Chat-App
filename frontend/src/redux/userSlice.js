import { createSlice } from "@reduxjs/toolkit";

const userSlices = createSlice({
    name:"user",
    initialState:{
        authUser: null
    },
    reducers:{
        setAuthUser: (state, action) => {
            state.authUser = action.payload;
        }
    }
})

export const {setAuthUser} = userSlices.actions;
export default userSlices.reducer;