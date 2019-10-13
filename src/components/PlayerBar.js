import React, { Component } from 'react';

class PlayerBar extends Component {
  render() { 
    return ( 
      <section className="player-bar">
        <section id="buttons" className="container">
          <div className="control-group main-controls">
            <button className="previous" onClick={this.props.handlePrevClick}>
              <span className="ion-skip-backward orange-text"></span>
            </button>
            <button className="play-pause">
              <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'} onClick={this.props.handleSongClick}  ></span>
            </button>
            <button className="next" onClick={this.props.handleNextClick}>
              <span className="ion-skip-forward"></span>
            </button>
          </div>
        </section>
        <div className="control-group currently-playing">
          <section id="time-control">
            <div className="current-time">Time: {this.props.formatTime(this.props.currentTime)}</div>
            <input
              type="range"
              className="seek-bar"
              value={(this.props.currentTime / this.props.duration) || 0}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleTimeChange}
            />
            <div className="total-time">Duration: {this.props.formatTime(this.props.duration)}</div>
          </section>
        </div>
        <div className="control-group volume">
          <section id="volume-control">
            <div className="icon ion-volume-low"> {this.props.handleVolumeIncrease}  </div>
            <input
              type="range"
              className="seek-bar"
              value={this.props.volume}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleVolumeChange}
            />
            <div className="icon ion-volume-high" onClick={this.props.handleVolumeDecrease}></div>
          </section>
        </div>
       </section>
     );
  }
}
 
export default PlayerBar;