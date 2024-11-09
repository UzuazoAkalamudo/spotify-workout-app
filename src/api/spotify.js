export const getSpotifyAlbums = async (searchInput, token) => {
    const searchTextLength = searchInput.length;

    if (searchTextLength > 0) {
        try {
            const response = await fetch(`https://api.spotify.com/v1/search?q=album%3A${searchInput}&type=album`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error("Error getting Spotify Albums", error);
        }
    };
};

export const getSpotifyAlbumTracks = async (album_id, token) => {
    try {
        const response = await fetch(`https://api.spotify.com/v1/albums/${album_id}/tracks?limit=20&offset=0`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.log("There was an error getting Spotify Album Tracks", error)
    }
}

export const getSpotifyAlbumTracksData = async (track_ids, token) => {
    const track_ids_appended = track_ids.join(",")
    try {
        const response = await fetch(`https://api.spotify.com/v1/audio-features?ids=${track_ids_appended}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.log("There was an error getting Spotify Album Track data", error)
    }
}