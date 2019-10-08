import React, { Component  } from 'react';
import albumData from '../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
    // Assigns albumData to the album property of the state object
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className='library'>
        {
          this.state.albums.map((album, index) =>
            <div key={index} >
              <img src={album.albumCover} alt={album.title} />
              <div>{album.title}</div>
              <div>{album.artist}</div>
              <div>{album.songs.length} songs</div>
            </div>
          )
        }
      </section>
    );
  }
}

export default Library;