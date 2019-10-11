import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from '../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
    // Assigns albumData to the album property of the state object
    this.state = { albums: albumData };
  }

  render() {
    return (
      <main className="library">
        <section className='album-covers container clearfix'>
          {
            this.state.albums.map((album, index) =>
              <section className="collection-album-container column half">
                <img src={album.albumCover} alt={album.title} />
                <section className="collection-album-info caption">
                  <Link to={`/album/${album.slug}`} key={index}>
                    <div className="album-name">{album.title}</div>
                    <div>{album.artist}</div>
                    <div>{album.songs.length} songs</div>
                  </Link>
                </section>
              </section>

            )
          }
        </section>
      </main>

    );
  }
}

export default Library;