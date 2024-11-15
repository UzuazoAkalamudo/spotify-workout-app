import React from "react"
import {Track} from "../../models/models"

const Workout = ({workout}) => {
    return (
        <div className="flex flex-col p-8 gap-8 h-screen w-screen">
            <div className="flex gap-10">
                <img className="w-40 md:w-56 lg:w-64 rounded-md" alt="album cover" src={workout?.coverUrl} />
                <div className="flex flex-col self-end">
                    <h2 className="font-sans text-base md:text-lg lg:text-xl">{workout?.type}</h2>
                    <h1 className="font-racing text-2xl md:text-4xl lg:text-6xl">{workout?.name}</h1>
                    <div className="flex gap-2">
                        {workout?.artists?.map((artist: object, index: number) => (<h3 key={index} className="font-sans text-base md:text-lg lg:text-xl">{artist.name}</h3>))}
                    </div>
                    <h2 className="font-sans text-base md:text-lg lg:text-xl">Energy: {workout?.energy}</h2>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="grid grid-cols-[1fr,4fr,1fr,1fr] mb-4">
                    <h3>#</h3>
                    <h3>Title</h3>
                    <h3>Incline</h3>
                    <h3>Speed (mph)</h3>
                </div>
                {workout?.tracks?.map((track: Track, index: number) => (
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

export default Workout;