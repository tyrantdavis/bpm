import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find(album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration, 
      isPlaying: false,
      volume: 0.5,
      isHovered: false
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  componentDidMount() {
    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime });
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
      }
    };
    this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
  }

  componentWillUnmount() {
    this.audioElement.src = null;
    this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
  }


  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) { this.setSong(song); }     
      this.play();
    }
  }

  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleNextClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const numOfSongs = this.state.album.songs.length - 1;
    const newIndex = Math.min(numOfSongs, currentIndex + 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }

  handleVolumeChange(e) {
    const newVolume = e.target.value;
    this.audioElement.volume = newVolume;
    this.setState({ volume: newVolume });
  }

  handleVolumeIncrease(e) {
    if (this.state.volume < 1) {
      const newVolume = this.state.volume + 0.1;
      this.audioElement.volume = Math.min(newVolume, 1);
      this.setState({ volume: newVolume });
    } else this.setState({ volume: 1 });
  }

  handleVolumeDecrease(e) {
    if (this.state.volume > 0) {
      const newVolume = this.state.volume - 0.1;
      this.audioElement.volume = Math.max(0, newVolume);
      this.setState({ volume: newVolume });
    } else this.setState({ volume: 0 });
  }

  formatTime(time) {
    if (time) {
      return `${ Math.floor(time / 60)  }:${Number(time % 60 / 100).toFixed(2).substr(2, 3)} `;
    } else {
      return "-:--"
    };
  }

  render() {
    return (
      <body className="album">
        <main className="album-view container narrow">
          <section id="album-info" className="clearfix"> 
            <div className="column half">
              <img id="cover" className="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title} />
            </div>
            <div className="album-view-details column half">
              <h1 className="album-view-title">{this.state.album.title}</h1>
              <h2 className="album-view-artist">{this.state.album.artist}</h2>
              <div className="album-view-release-info">{this.state.album.releaseInfo}</div>
            </div>
          </section>
          {/* <section id="songs"> */}
            <table className="album-view-song-list">
              <colgroup>
                <col id="song-number-column" />
                <col id="song-title-column" />
                <col id="song-duration-column" />
              </colgroup>
              <tbody>
                {
                  this.state.album.songs.map((song, index) =>
                    <tr className="album-view-song-item" key={index}
                      onClick={() => this.handleSongClick(song)}
                      onMouseEnter={() => this.setState({ isHovered: index + 1 })}
                      onMouseLeave={() => this.setState({ isHovered: false })}
                    >
                      <td id="song-actions" className="song-item-number">
                        <button className="album-song-button">
                          {this.state.currentSong.title === song.title ?
                            (<span className={this.state.isPlaying ? "ion-pause" : "ion-play"} />) :
                            this.state.isHovered === index + 1 ? (<span className="ion-play" />) :
                              (<span id="song-number">{index + 1}</span>)}
                        </button>
                      </td>
                      <td className="song-item-title">
                        <span>
                          {song.title}
                        </span>
                      </td>
                      <td className="song-item-duration">
                        <span>
                          {this.formatTime(song.duration)}
                        </span>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
         {/* </section> */}
        </main>
        <section>
        <PlayerBar 
          isPlaying={this.state.isPlaying}
          currentSong={this.state.currentSong}
          currentSongArtist={this.state.album.artist}
          currentTime={this.audioElement.currentTime}
          duration={this.audioElement.duration}
          volume={this.audioElement.volume}
          handleSongClick={() => this.handleSongClick(this.state.currentSong)}
          handlePrevClick={() => this.handlePrevClick()}
          handleNextClick={() => this.handleNextClick()}
          handleTimeChange={(e) => this.handleTimeChange(e)}
          handleVolumeChange={e => this.handleVolumeChange(e)}
          formatTime={(e) => this.formatTime(e)}
          handleVolumeIncrease={e => this.handleVolumeIncrease(e)}
          handleVolumeDecrease={e => this.handleVolumeDecrease(e)}
          />
        </section>
          {/* </main> */}
      </body>
    );
  }
}
export default Album;