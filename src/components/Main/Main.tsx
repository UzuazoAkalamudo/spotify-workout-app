import { Routes, Route } from 'react-router-dom'
import Homepage from '../Homepage/Homepage.tsx';
import GenerateWorkoutPage from '../GenerateWorkoutPage/GenerateWorkoutPage.tsx';
import React from "react";

const Main = () => {

    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/generate-workout" element={<GenerateWorkoutPage />}></Route>
            </Routes>
        </main>
    );
}

export default Main;