import React, { Component  } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component  {
  render () {
    return (
      <div className="App">
        <header className="App">
          <nav>
            <img src="/assets/images/bpmLogo.png" alt="block party music logo" className="logo"  />
            <Link to='/'>Landing</Link>
            <Link to='/library'>Library</Link>
          </nav>
          <h1>Block Party Music</h1>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />

          {/* // slug will be a version of the album title that's formatted to work well in a URL.  */}
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}
export default App;
