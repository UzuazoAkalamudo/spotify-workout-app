import { Track, Speed } from "../models/models.ts";
import { roundToHalf } from "../util/util.ts";

export const generateTreadmillWorkout = (
  speed: string,
  incline: string,
  trackNames: Array<string>,
  trackIds: Array<string>,
  trackEnergies: Array<number>,
) => {
  // all kmph
  const walkMinSpeed: number = 2;
  const jogMinSpeed: number = 6;
  const runMinSpeed: number = 9;
  const mixMinSpeed: number = 2;
  let speedRange: number = 3;
  const mixSpeedRange: number = 10;

  if (speed === "mix") {
    speedRange = mixSpeedRange;
  }
  const easyMin: number = 0;
  const mediumMin: number = 5;
  const hardMin: number = 10;
  const inclineRange: number = 5;

  // Speed Min
  let speedMin: number = 2;

  switch (speed) {
    case "walk":
      speedMin = walkMinSpeed;
      break;
    case "jog":
      speedMin = jogMinSpeed;
      break;
    case "run":
      speedMin = runMinSpeed;
      break;
    case "mix":
      speedMin = mixMinSpeed;
  }

  // Incline Min
  let inclineMin: number = 0;
  switch (incline) {
    case "easy":
      inclineMin = easyMin;
      break;
    case "medium":
      inclineMin = mediumMin;
      break;
    case "hard":
      inclineMin = hardMin;
      break;
  }

  //tracks array

  const tracks: Array<Track> = [];
  for (let i = 0; i < trackIds.length; i++) {
    const incline: string = roundToHalf(
      inclineRange * trackEnergies[i] + inclineMin,
    ).toString();
    const speed_kmph: string = (
      speedRange * trackEnergies[i] +
      speedMin
    ).toFixed(1);
    const speed_mph: string = (
      (speedRange * trackEnergies[i] + speedMin) /
      1.609
    ).toFixed(1);
    const speed = new Speed(speed_kmph, speed_mph);
    const track = new Track(
      trackIds[i],
      trackNames[i],
      trackEnergies[i].toString(),
      incline,
      speed,
    );
    tracks.push(track);
  }
  console.log(tracks);
  return tracks;
};
