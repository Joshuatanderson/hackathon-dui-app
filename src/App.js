import React, { Component } from 'react';

class App extends Component {
// https: //data.brla.gov/resource/5rji-ddnu.json?offense_desc=D W I
  getData = () => {
    fetch('https://data.brla.gov/resource/5rji-ddnu.json?$limit=50000&$offset=150')
      .then(function (response) {
        return response.json();
      })
      .then(json =>{
        console.log(json);
      })
  }

  render() {
    this.getData();

    return (
      <div className="App">
        <header className = "hero is-primary">
          <div className = "hero-body">
            <p className = "title">HacketyHackMcHackface</p>
            <p className = "subtitle"> Give it up for team potassium!</p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
