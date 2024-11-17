import { getSpotifyAlbums, getSpotifyAlbumTracks, getSpotifyAlbumTracksData } from "../../api/spotify";
import {WorkoutData} from "../../models/models.ts";
import { generateTreadmillWorkout } from "../../services/workout.ts";
import { AuthContext, type IAuthContext } from "react-oauth2-code-pkce";
import React, { useEffect, useState, useContext } from "react";

const GenerateWorkoutForm = ({setWorkoutData}) => {

    const [formData, setFormData] = useState({
        searchInput: "",
        incline: "medium",
        speed: "jog"
    });
    const [spotifyData, setSpotifyData] = useState({})
    const [selectedAlbum, setSelectedAlbum] = useState({})
    const { token } = useContext<IAuthContext>(AuthContext);
    const [searchItemsVisible, setSearchItemsVisible] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "searchInput") {
            setSearchItemsVisible(true);
            if (value === "") {
                setSearchItemsVisible(false);
            }
        }
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        console.log(selectedAlbum);

        setFormData({
            searchInput: "",
            incline: "medium",
            speed: "jog"
        }
        );

        if (Object.keys(selectedAlbum).length !== 0 && formData.incline && formData.speed) {

            // Get album track data , object with name/ids, track data
            console.log(selectedAlbum)
            const albumTracks = await getSpotifyAlbumTracks(selectedAlbum.id, token);
            const trackNames: Array<string> = [];
            const trackIds: Array<string>  = [];

            albumTracks.items.forEach(track => {
                trackNames.push(track.name)
                trackIds.push(track.id);
            });

            console.log(trackNames)
            console.log(trackIds)

            const trackData = await getSpotifyAlbumTracksData(trackIds, token);
            const trackEnergies = trackData.audio_features.map(item => item.energy);

            // call function, get an array of track objects with id, name, energy, incline, speed
            const tracks = generateTreadmillWorkout(formData.speed, formData.incline, trackNames, trackIds, trackEnergies);

            let sum: number = 0.0;

            trackEnergies.forEach((track_energy) => {
                sum = sum + track_energy;
            });

            const avEnergy = ((sum/trackEnergies.length) * 100).toFixed(0);
            console.log(avEnergy)

            const workoutData = new WorkoutData(selectedAlbum.id, selectedAlbum.name, selectedAlbum.type, selectedAlbum.artists, avEnergy, selectedAlbum.images[0].url, tracks, formData.incline, formData.speed);

            setWorkoutData(workoutData)
        }
        else {
            alert('Please select an album.');
        }
    };

    const selectAlbum = (album) => {
        console.log("Album selected")

        //stop showing album list
        setSearchItemsVisible(false)

        setFormData((prevData) => ({
            ...prevData,
            searchInput: album.name
        }));
        setSelectedAlbum(album);
    }

    useEffect(() => {
        if (!formData.searchInput || !token) return;
        const fetchAlbum = async () => {
            const albums = await getSpotifyAlbums(formData.searchInput, token);
            console.log(albums)
            setSpotifyData(albums);
        };
        fetchAlbum();
    }, [formData.searchInput, token])

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen">
            <form onSubmit={handleSubmit} className="flex flex-col w-96 gap-8 px-20 py-10 rounded-xl" id="album-form">
                <div className="flex relative flex-col gap-2">
                    <input className="w-full p-2 border-2 border-gray-300 rounded-lg text-gray-700 bg-gray-100 focus:border-blue-400 focus:bg-white focus:outline-none" id="search-input" name="searchInput" value={formData.searchInput} onChange={handleChange} type="text" placeholder="Search Album" />
                    {searchItemsVisible && (<ul id="album-list" className="flex w-full absolute mt-11 flex-col gap-2 max-h-80 overflow-y-auto bg-gray-300 rounded-lg">
                        {spotifyData?.albums?.items?.slice(0, 5).map((album, index) => (
                            <li className="flex items-center gap-2 hover:bg-gray-200 p-3 cursor-pointer" key={index} onClick={() => selectAlbum(album)}>
                                <img src={album.images[2]?.url} alt="album cover" />
                                <h3>{album.name}</h3>
                            </li>
                        ))}
                    </ul>)}
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="incline" className="text-lg font-medium text-gray-700">Incline:</label>
                    <select className="w-full p-2 border-2 border-gray-300 rounded-lg text-gray-700 bg-gray-100 focus:border-blue-400 focus:bg-white focus:outline-none" id="incline" value={formData.incline} onChange={handleChange} name="incline">
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="speed" className="text-lg font-medium text-gray-700">Speed:</label>
                    <select className="w-full p-2 border-2 border-gray-300 rounded-lg text-gray-700 bg-gray-100 focus:border-blue-400 focus:bg-white focus:outline-none" id="speed" value={formData.speed} onChange={handleChange} name="speed">
                        <option value="walk">Walk</option>
                        <option value="jog">Jog</option>
                        <option value="run">Run</option>
                        <option value="mix">Mix</option>
                    </select>
                </div>

                <div>
                    <button className="w-full bg-green-500 hover:bg-green-600
                     text-white font-bold py-2 px-4 rounded-lg transition duration-200
                     ease-in-out focus:outline-none focus:ring-2
                   focus:ring-green-400 focus:ring-opacity-50" type="submit">Generate workout</button>
                </div>
            </form>
        </div>
    );
}

export default GenerateWorkoutForm;