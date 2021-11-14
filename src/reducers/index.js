import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: 'Arcade', duration: '4:05'},
        {title: 'Cosmic Minds', duration: '1:45'},
        {title: 'Tabu', duration: '8:45'},
        {title: 'Pulse', duration: '4:55'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});