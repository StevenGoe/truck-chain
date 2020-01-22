import React, { Component } from 'react';
import FrontScreen from './FrontScreen';
import NavBar from './NavBar';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <section className='App'>
        <NavBar />
        <FrontScreen />
      </section>
    );
  }
}

export default App;
