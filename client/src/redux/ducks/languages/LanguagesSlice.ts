import { createSlice } from '@reduxjs/toolkit';
import { ILanguage } from './interfaces';
import { SiCplusplus, SiPython } from "react-icons/si";
import { IoLogoJavascript } from 'react-icons/io';
const initialState: ILanguage[] = [
    {
        id: 1,
        title: "python",
        background: "#306988",
        color: "#FFD43B",
        icon: SiPython
    },
    {
        id: 2,
        title: "javascript",
        background: "#FFD43B",
        color: "#000",
        icon: IoLogoJavascript
    },
    {
        id: 3,
        title: "c++",
        background: "#fff",
        color: "#306988",
        icon: SiCplusplus
    }
] 

const LanguagesSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
});

export default LanguagesSlice.reducer;