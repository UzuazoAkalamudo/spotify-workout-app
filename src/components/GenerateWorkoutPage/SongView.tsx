import React from "react";

const SongView = ({ handleChangeSong, workoutData, songViewClicked, toggleView, trackIndex}) => {


  return (
    <section>
      <button onClick={toggleView}>
        {songViewClicked ? "Switch to Album View" : "Switch to Song View"}
      </button>
      <div>
        <img
          className="w-40 md:w-56 lg:w-64 rounded-md"
          alt={`Album cover for "${workoutData?.name}"`}
          aria-label={`Cover image of workout album "${workoutData?.name}"`}
          src={workoutData?.coverUrl}
        />
        <h2>{workoutData?.tracks[trackIndex]?.name}</h2>
        <div>
            <span>{`Set Incline: ${workoutData?.tracks[trackIndex]?.incline}`}</span>
            <button>{`Set Speed: ${workoutData?.tracks[trackIndex]?.speed?.mph}`}</button>
        </div>
        <div>
            <button id="previous-button" onClick={handleChangeSong}>Previous</button>
            <button id="next-button" onClick={handleChangeSong}>Next</button>
        </div>
      </div>
    </section>
  );
};

export default SongView;
