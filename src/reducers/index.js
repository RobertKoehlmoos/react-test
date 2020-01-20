import {combineReducers} from 'redux'

const songsReducer = () => {
    return [
        {title: "no Scrubs", duration: "4:05"},
        {title: "macarena", duration: '3:15'},
        {title: 'I want it that way', duration: '1:50'},
        {title: 'All Star', duration: '3:16'}
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})