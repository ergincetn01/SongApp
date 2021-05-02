import React from 'react';
import {connect} from 'react-redux'


const SongDetail = ({song}) => {
    if(!song) {
        return (
            <div> No song selected</div> 
        )
    }
    return (
        
        <div>
            <u><h3>Song Name:</h3></u>
            <div className="songtitleContainer"> {'=>'} {song.title} </div>
            <br />
            <u><h3>Duration: </h3></u>
            <div className="durationContainer">  {'=>'} {song.duration}</div>
            <br />
            <u><h3>Genre: </h3></u>
            <div>   {'=>'}  {song.genre}</div>
            <br />
            <u><h4>Singer:</h4></u>
            <div>  {'=>'}  {song.singer}</div>
        </div>
    )

}

const mapStateToProps = (state) => {

    return  {song: state.selectedSong} 
    
}

export default connect(mapStateToProps)(SongDetail);
