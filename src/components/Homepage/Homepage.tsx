import { useEffect, useContext } from "react";
import LoginButton from "./LoginButton.tsx";
import { AuthContext, type IAuthContext } from "react-oauth2-code-pkce";
import { useNavigate } from "react-router-dom";
import React from "react"

const Homepage = () => {

    const { token } = useContext<IAuthContext>(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate("/generate-workout");
        }
    }, [token, navigate]);

    return (
        <div className="h-screen flex flex-col justify-center items-center gap-4">
            <h1 className="text-5xl font-racing">Spotify Workout Generator</h1>
            <small className="text-lg">Generate treadmill workouts tailored to your favourite albums</small>
            <LoginButton />
        </div>
    );
}

export default Homepage;