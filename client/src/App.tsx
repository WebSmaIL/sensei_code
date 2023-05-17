import React from 'react';

import StartHome from './components/startHome/StartHome';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/signIn/SignIn';
import Home from './components/home/Home';
import LanguagePython from './components/home/language/LanguagePython';
import Tasks from './components/tasks/Tasks';
import EditorMain from './components/editor/EditorMain';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<StartHome />} />
                <Route path="/login/:operation" element={<SignIn />} />
                <Route path="/homepage" element={<Home />} />

                <Route path="/python" element={<LanguagePython />} />
                <Route path="/task1" element={<Tasks />} />
                <Route path="/editor" element={<EditorMain />} />
            </Routes>
        </>
    );
};

export default App;
