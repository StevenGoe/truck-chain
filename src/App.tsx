import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FrontScreen from './FrontScreen';
import NavBar from './NavBar';
import Haulier from './Haulier';
import SecondScreen from './SecondScreen';
import './css/App.css';
// Testing

class App extends Component {
  render() {
    return (
      <section className='App'>
        <BrowserRouter>
          <div>
            <NavBar />
            <Switch>
              <Route path='/' component={FrontScreen} exact />
              <Route path='/udbyder' component={SecondScreen} />
              <Route path='/vognmand' component={Haulier} />
            </Switch>
          </div>
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
