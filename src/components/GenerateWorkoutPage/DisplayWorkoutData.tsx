import React from "react"
import {Track} from "../../models/models"

const DisplayWorkoutData = ({workoutData}) => {
    return (
        <div className="flex flex-col p-8 gap-8 h-screen w-screen overflow-y-auto">
            <div className="flex gap-10">
                <img className="w-40 md:w-56 lg:w-64 rounded-md" alt="album cover" src={workoutData?.coverUrl} />
                <div className="flex flex-col self-end">
                    <h2 className="font-sans text-base md:text-lg lg:text-xl">{workoutData?.type}</h2>
                    <h1 className="font-racing text-2xl md:text-4xl lg:text-6xl">{workoutData?.name}</h1>
                    <div className="flex gap-2">
                        {workoutData?.artists?.map((artist: object, index: number) => (<h3 key={index} className="font-sans text-base md:text-lg lg:text-xl">{artist.name}</h3>))}
                    </div>
                    <h2 className="font-sans text-base md:text-lg lg:text-xl">Energy: {workoutData?.energy}</h2>
                    <div className="flex gap-2">
                        <h2 className="text-green-400 rounded-xl px-3 border-2 border-green-400 font-sans text-base md:text-lg lg:text-xl">{workoutData?.userIncline}</h2>
                        <h2 className="text-green-400 rounded-xl px-3 border-2 border-green-400 font-sans text-base md:text-lg lg:text-xl">{workoutData?.userSpeed}</h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="grid grid-cols-[1fr,4fr,1fr,1fr] mb-4">
                    <h3>#</h3>
                    <h3>Title</h3>
                    <h3>Incline</h3>
                    <h3>Speed (mph)</h3>
                </div>
                {workoutData?.tracks?.map((track: Track, index: number) => (
                    <div key={index} className="grid grid-cols-[1fr,4fr,1fr,1fr] hover:bg-gray-200">
                        <h3>{index+1}</h3>
                        <h3>{track.name}</h3>
                        <h3>{track.incline}</h3>
                        <h3>{track.speed.mph}</h3>
                    </div>
                )
                )}
            </div>
        </div>
    );
}

export default DisplayWorkoutData;