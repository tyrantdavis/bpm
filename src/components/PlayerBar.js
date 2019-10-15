import React, { Component } from 'react';

class PlayerBar extends Component {
  render() { 
    return ( 
      <section className="player-bar">
        <div className="song-info"> {this.props.currentSong.title}  </div>
        <div className="song-info"> { this.props.currentSongArtist  }  </div>
        <section id="buttons" className="container" >
          <div className="control-group main-controls" >
            <a className="previous" onClick={this.props.handlePrevClick}>
              <span className="ion-skip-backward"></span>
            </a>
            <a className="play-pause">
              <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'} onClick={this.props.handleSongClick}  ></span>
            </a>
            <a className="next" onClick={this.props.handleNextClick}>
              <span className="ion-skip-forward"></span>
            </a>
          </div>
        </section>
        <div className="control-group currently-playing" >
          <section id="time-control">
            <span className="current-time formatTimeAndDuration right-pad">Time: {this.props.formatTime(this.props.currentTime)}</span>
            <input style={{ width: "33%"}}
              type="range"
              className="seek-bar"
              value={(this.props.currentTime / this.props.duration) || 0}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleTimeChange}
            />
            <span className="total-time formatTimeAndDuration left-pad">Duration: {this.props.formatTime(this.props.duration)}</span>
          </section>
        </div>
        <div className="control-group volume">
          <section id="volume-control">
            <span className="icon ion-volume-low right-pad"> {this.props.handleVolumeIncrease}  </span>
            <input style={{ width: "23%" }}
              type="range"
              className="seek-bar"
              value={this.props.volume}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleVolumeChange}
            />
            <span className="icon ion-volume-high left-pad" onClick={this.props.handleVolumeDecrease}></span>
          </section>
        </div>
       </section>
     );
  }
}
 
export default PlayerBar;