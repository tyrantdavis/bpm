import React, { Component  } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import Logo from './sampleBpmLogo.png';
class App extends Component  {
  render () {
    return (
      <div className="App">
        <header className="App">
          <nav className="navbar">
            <Link to="/" className="logo">
              <img  src={Logo} />
            </Link>
            <section className="links-container">
              <Link to='/library' className="navbar-link">Library</Link>
            </section>
          </nav>
        </header>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          {/* // slug will be a version of the album title that's formatted to work well in a URL.  */}
          <Route path="/album/:slug" component={Album} />
      </div>
    );
  }
}
export default App;
