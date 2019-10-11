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
              <section className="library-album-container column fourth">
                <img src={album.albumCover} alt={album.title} />
                <section className="library-album-info caption">
                  <p>
                    <Link to={`/album/${album.slug}`} key={index}>
                      <div className="album-name">{album.title}</div>
                      <div>{album.artist}</div>
                      <div>{album.songs.length} songs</div>
                    </Link>
                  </p>
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