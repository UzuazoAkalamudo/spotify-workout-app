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

    const [workout, setWorkout] = useState({})

    return (
        <div className="flex">
            <Sidebar setWorkout={setWorkout}/>
            {Object.keys(workout).length === 0 && <GenerateWorkoutForm setWorkout={setWorkout}/>}
            {Object.keys(workout).length > 0 && <Workout workout={workout} />}
        </div>
    );
}

export default GenerateWorkoutPage;