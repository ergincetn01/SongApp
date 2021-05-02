import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
        {title: 'Derbeder', duration: '4.28', genre: "90's pop", singer: "Soner Arıca" },
        {title: 'Heyecanlıyım', duration: '3.50', genre: "90's pop", singer: "Burak Kut"},
        {title: 'Bu Sen Değilsin', duration: '3.44', genre: "Turkish Rap", singer: "Sagopa Kajmer"},
        {title: 'Serseri Mayın', duration: '4.37', genre: "90's pop", singer: "Gökhan Kırdar"}, 
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
