import { Routes, Route } from 'react-router-dom'
import Homepage from '../Homepage/Homepage.tsx';
import GenerateWorkoutPage from '../GenerateWorkoutPage/GenerateWorkoutPage.tsx';
import React from "react";

const Main = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/generate-workout" element={<GenerateWorkoutPage />}></Route>
            </Routes>
        </>
    );
}

export default Main;