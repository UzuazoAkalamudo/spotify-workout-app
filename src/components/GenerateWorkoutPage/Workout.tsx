import React from "react"

const Workout = ({workout}) => {
    return (
        <section className="flex flex-col" >
            <div className="flex gap-10">
                <img className="w-60" alt="album cover" src={workout?.coverUrl} />
                <div className="flex flex-col">
                    <h2 className="font-racing text-3xl">{workout?.type}</h2>
                    <h1 className="font-racing text-5xl">{workout?.name}</h1>
                    <div className="flex gap-2">
                        {workout?.artists?.map((artist, index) => (<h3 key={index} className="text-1xl">{artist.name}</h3>))}
                    </div>
                    <h2 className="font-racing text-3xl">Energy: {workout?.energy}</h2>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="grid grid-cols-[6fr,1fr,1fr]">
                    <h3>Title</h3>
                    <p>Incline</p>
                    <p>Speed (mph)</p>
                </div>
                {workout?.tracks?.map((track, index) => (
                    <div key={index} className="grid grid-cols-[6fr,1fr,1fr]">
                        <h3>{track.name}</h3>
                        <p>{track.incline}</p>
                        <p>{track.speed.mph}</p>
                    </div>
                )
                )}
            </div>
        </section>
    );
}

export default Workout;