import React from "react";

const SongView = ({ handleChangeSong, workoutData, songViewClicked, toggleView, trackIndex}) => {


  return (
    <section className="flex flex-col gap-6 h-screen w-screen justify-center items-center">
      <button className="py-2 px-2 rounded-md bg-green-400 hover:bg-green-500 focus:bg-green-600"onClick={toggleView}>
        {songViewClicked ? "Switch to Album View" : "Switch to Song View"}
      </button>
      <div className="flex flex-col gap-5 items-center">
        <img
          className="w-40 md:w-60 lg:w-96 rounded-md"
          alt={`Album cover for "${workoutData?.name}"`}
          aria-label={`Cover image of workout album "${workoutData?.name}"`}
          src={workoutData?.coverUrl}
        />
        <h2 className="font-racing text-2xl md:text-4xl lg:text-6xl">{workoutData?.tracks[trackIndex]?.name}</h2>
        <div className="flex gap-10 self-center text-2xl md:text-3xl lg:text-5xl">
            <span>{`Set Incline: ${workoutData?.tracks[trackIndex]?.incline}`}</span>
            <button>{`Set Speed: ${workoutData?.tracks[trackIndex]?.speed?.mph}`}</button>
        </div>
        <div className="flex gap-4 text-xl md:text-2xl lg:text-4xl">
            <button className="hover:text-green-400"id="previous-button" onClick={handleChangeSong}>Previous</button>
            <button className="hover:text-green-400" id="next-button" onClick={handleChangeSong}>Next</button>
        </div>
      </div>
    </section>
  );
};

export default SongView;
