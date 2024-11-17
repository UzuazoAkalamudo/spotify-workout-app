import GenerateWorkoutForm from "./GenerateWorkoutForm.tsx";
import Workout from "./Workout.tsx";
import Sidebar from "../Sidebar/Sidebar.tsx"
import { useState, useEffect, useContext } from "react";
import { AuthContext, type IAuthContext } from "react-oauth2-code-pkce";
import { useNavigate } from "react-router-dom";
import React from "react"

const GenerateWorkoutPage = () => {
    const { token } = useContext<IAuthContext>(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/");
        }
    }, [token, navigate]);

    const [workoutData, setWorkoutData] = useState({})

    return (
        <div className="flex">
            <Sidebar setWorkoutData={setWorkoutData}/>
            {Object.keys(workoutData).length === 0 && <GenerateWorkoutForm setWorkoutData={setWorkoutData}/>}
            {Object.keys(workoutData).length > 0 && <Workout workoutData={workoutData} />}
        </div>
    );
}

export default GenerateWorkoutPage;