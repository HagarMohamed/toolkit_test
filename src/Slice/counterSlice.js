import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    name: "hagar"
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        addOne: (state)=> {
           state.count += 1
        },
        minusOne: (state)=> {
            state.count -= 1
        },
        setName: (state)=> {
           state.name = 'tamara'
        }


    }
})

export const { addOne, minusOne, setName } = counterSlice.actions

export default counterSlice.reducer