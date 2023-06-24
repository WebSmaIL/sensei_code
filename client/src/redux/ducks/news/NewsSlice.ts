import { createSlice } from '@reduxjs/toolkit';


let initialState = {};

const NewsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},

    // extraReducers: (builder) => {
    //     builder
  
    //         .addCase(fetchTasks.pending, (state) => {
    //             console.log('start')
    //         })
    //         .addCase(fetchTasks.fulfilled, (state, action) => {
    //             console.log('payload-', action.payload)
    //             state = [...action.payload]
    //             console.log('state-', state)
    //         })
    //         .addCase(fetchTasks.rejected, (state, action) => {
    //             console.log('error')
    //         })
    //   }
});

export default NewsSlice.reducer;