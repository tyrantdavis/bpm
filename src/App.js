import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

function App() {
  return (
    <div className="App">
      <header className="App">
        <h1>Block Party Music</h1>
      </header>
      <main>
        <Route exact path="/" component={Landing} />
        <Route path="/library" component={Library} />
        <Route path="/album" component={Album} />
      </main>
    </div>
  );
}

export default App;
