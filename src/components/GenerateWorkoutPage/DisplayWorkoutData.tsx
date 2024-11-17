import React, { useState } from "react"
import { Track } from "../../models/models"

const DisplayWorkoutData = ({ workoutData }) => {

    const [toggleSpeedClicked, setToggleSpeedClicked] = useState(true);


    const toggleSpeed = () => {
        setToggleSpeedClicked(!toggleSpeedClicked)
    }


    return (
        <section className="flex flex-col p-8 gap-8 h-screen w-screen overflow-y-auto">
            <section className="flex gap-10">
                <img className="w-40 md:w-56 lg:w-64 rounded-md" alt="Workout album cover" src={workoutData?.coverUrl} />
                <div className="flex flex-col self-end">
                    <p className="font-sans text-base md:text-lg lg:text-xl">{workoutData?.type}</p>
                    <h1 className="font-racing text-xl md:text-4xl lg:text-6xl">{workoutData?.name}</h1>
                    <div className="flex gap-2">
                        {workoutData?.artists?.map((artist: object, index: number) => (<p key={index} className="font-sans text-base md:text-lg lg:text-xl">{artist.name}</p>))}
                    </div>
                    <p className="font-sans text-base md:text-lg lg:text-xl">Energy: {workoutData?.energy}</p>
                    <div className="flex gap-2">
                        <h2 className="text-green-400 rounded-xl px-3 border-2 border-green-400 font-sans text-base md:text-lg lg:text-xl">{workoutData?.userIncline}</h2>
                        <h2 className="text-green-400 rounded-xl px-3 border-2 border-green-400 font-sans text-base md:text-lg lg:text-xl">{workoutData?.userSpeed}</h2>
                    </div>
                </div>
            </section>

            <section className="flex flex-col">
                <div className="grid grid-cols-[1fr,4fr,1fr,1fr] mb-4">
                    <h2>#</h2>
                    <h2>Title</h2>
                    <h2>Set Incline</h2>
                    <button onClick={toggleSpeed} className="justify-self-start hover:text-green-400">{toggleSpeedClicked ? "Set Speed (mph)" : "Set Speed (kmph)"}</button>
                </div>
                <ul>
                    {workoutData?.tracks?.map((track: Track, index: number) => (
                        <li key={index} className="grid grid-cols-[1fr,4fr,1fr,1fr] hover:bg-gray-200">
                            <span>{index + 1}</span>
                            <span>{track.name}</span>
                            <span>{track.incline}</span>
                            <span>{toggleSpeedClicked ? track.speed.mph : track.speed.kmph}</span>
                        </li>
                    )
                    )}
                </ul>
            </section>
        </section>
    );
}

export default DisplayWorkoutData;