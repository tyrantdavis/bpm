import React from 'react';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
    // Assigns albumData to the album property of the state object
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className='library'>
        Library will go here
      </section>
    );
  }
}

export default Library;