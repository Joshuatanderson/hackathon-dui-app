import React, { Component } from 'react';
import GoogleMap from './GoogleMap';
import data from './brdwi.json';

console.log(data);
class App extends Component {
// https: //data.brla.gov/resource/5rji-ddnu.json?offense_desc=D W I
  render() {

    return (
      <div className="App">
        <header className = "hero is-primary">
          <div className = "hero-body">
            <p className = "title">HacketyHackMcHackface</p>
            <p className = "subtitle"> Give it up for team potassium!</p>
          </div>
        </header>
        <GoogleMap/>
      </div>
    );
  }
}

export default App;
