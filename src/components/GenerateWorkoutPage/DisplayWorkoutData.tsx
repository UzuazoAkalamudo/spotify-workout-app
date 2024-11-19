import React, { useState } from "react";
import { Track } from "../../models/models";
import { Artist } from "../../interfaces/types";
import SongView from "./SongView.tsx";

const DisplayWorkoutData = ({ workoutData }) => {
  const [toggleSpeedClicked, setToggleSpeedClicked] = useState(true);
  const [songViewClicked, setSongViewClicked] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);


  const toggleSpeed = () => {
    setToggleSpeedClicked(!toggleSpeedClicked);
  };

  const toggleView = () => {
    setSongViewClicked(!songViewClicked);
  };

  const handleChangeSong = (e) =>{
    console.log(e.target.id)
    if (e.target.id === "previous-button" && trackIndex !== 0){
      setTrackIndex(trackIndex-1)
    }
    else if (e.target.id === "next-button" && trackIndex !== workoutData?.tracks?.length-1){
      setTrackIndex(trackIndex+1)
    }
  }

  const handleSongClick = (index) => {
    setTrackIndex(index);
    toggleView();
  }

  return (
    <>
    {songViewClicked ? <SongView handleChangeSong={handleChangeSong} toggleView={toggleView} songViewClicked={songViewClicked} workoutData={workoutData} trackIndex={trackIndex}/> :
    <section className="flex flex-col p-8 gap-8 h-screen w-screen overflow-y-auto">
      <section className="flex gap-10">
        <img
          className="w-40 md:w-56 lg:w-64 rounded-md"
          alt={`Album cover for "${workoutData?.name}"`}
          aria-label={`Cover image of workout album "${workoutData?.name}"`}
          src={workoutData?.coverUrl}
        />
        <div className="flex flex-col self-end">
          <p className="font-sans text-base md:text-lg lg:text-xl">
            {workoutData?.type}
          </p>
          <h1 className="font-racing text-xl md:text-4xl lg:text-6xl">
            {workoutData?.name}
          </h1>
          <div className="flex gap-2">
            {workoutData?.artists?.map((artist: Artist, index: number) => (
              <p
                key={index}
                className="font-sans text-base md:text-lg lg:text-xl"
              >
                {artist.name}
              </p>
            ))}
          </div>
          <p className="font-sans text-base md:text-lg lg:text-xl">
            Energy: {workoutData?.energy}
          </p>
          <div className="flex gap-2">
            <h2 className="text-green-400 rounded-xl px-3 border-2 border-green-400 font-sans text-base md:text-lg lg:text-xl">
              {workoutData?.userIncline}
            </h2>
            <h2 className="text-green-400 rounded-xl px-3 border-2 border-green-400 font-sans text-base md:text-lg lg:text-xl">
              {workoutData?.userSpeed}
            </h2>
          </div>
        </div>
      </section>

      <section className="flex flex-col">
        <button className="py-2 px-2 w-52 mb-8 h-15 rounded-md bg-green-400 hover:bg-green-500 focus:bg-green-600" onClick={toggleView}>{songViewClicked ? "Switch to Album View" : "Switch to Song View"}</button>
        <div className="grid grid-cols-[1fr,4fr,1fr,1fr] mb-4">
          <h2 aria-label="Track number">#</h2>
          <h2 aria-label="Track title">Title</h2>
          <h2 aria-label="Values to set treadmill incline to">Set Incline</h2>
          <button
            onClick={toggleSpeed}
            className="justify-self-start hover:text-green-400"
            aria-label={
              toggleSpeedClicked
                ? "Set speed in miles per hour (mph)"
                : "Set speed in kilometers per hour (km/h)"
            }
          >
            {toggleSpeedClicked ? "Set Speed (mph)" : "Set Speed (kmph)"}
          </button>
        </div>
        <ul aria-label="List of tracks for the workout album">
          {workoutData?.tracks?.map((track: Track, index: number) => (
            <li
              key={index}
              className="grid grid-cols-[1fr,4fr,1fr,1fr] hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSongClick(index)}
            >
              <span>{index + 1}</span>
              <span>{track.name}</span>
              <span>{track.incline}</span>
              <span>
                {toggleSpeedClicked ? track.speed.mph : track.speed.kmph}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </section>}
    </>
  );
};

export default DisplayWorkoutData;
