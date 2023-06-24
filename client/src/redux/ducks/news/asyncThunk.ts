import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { MyKnownError } from '../userInfo/interfaces';

import { INews } from './interface';
// export const fetchTasks = createAsyncThunk<
//     INews,
//     { rejectValue: MyKnownError }
// >('planets/fetchLeaders', async ( thunkApi) => {
//     const response = await axios.get(`http://localhost:8000/api/tasks/:$`);

//     if (response.status === 500) {
//         return thunkApi.rejectWithValue((await response.data) as MyKnownError);
//     } else {
//         return await response.data;
//     }
// });