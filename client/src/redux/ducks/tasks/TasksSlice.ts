import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from './asyncThunk';
import { ICurrentLanguage } from './interfaces';

let initialState: ICurrentLanguage = {
    lang_name: "python",
    modules: [
    {
      title: "1. Функция print()",
      description: "dadadadasdasd",
      lang_id: 1,
      tasks: [
        {
          complexity: 1,
          task_id: 1,
          title: "Print",
        },
        {
          complexity: 1,
          task_id: 2,
          title: "Print",
        },
      ],
    },
    {
      title: "2. Функция print()",
      description: "dsfkkskpofgpkfdpkogpkodfpkogopkpkosfkosapkof",
      lang_id: 1,
      tasks: [
        {
          complexity: 2,
          task_id: 3,
          title: "Print2",
        },
        {
          complexity: 1,
          task_id: 4,
          title: "Print2",
        },
      ],
    },
  ]}

const tasksSlice = createSlice({
    name: 'tasks',
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

export default tasksSlice.reducer;