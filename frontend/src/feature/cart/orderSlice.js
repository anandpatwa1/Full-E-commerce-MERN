import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name : 'order',
    initialState : [],
    reducers : {
        finalOrder : (state , action)=>{
            state.push(action.payload)
        }
    }
})

export const {finalOrder} = orderSlice.actions
export default orderSlice.reducer
