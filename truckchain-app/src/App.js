import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FrontScreen from './FrontScreen';
import OrderHandler from './OrderHandler';
import OrderTaker from './OrderTaker';
import NewOrder from './NewOrder';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderCreator: { Id: 'RGS', BrugerType: 0 },
      vognmandOne: { Id: 'Vognmand Jensen', BrugerType: 1 },
      vognmandTwo: { Id: 'Brødrene Rasmussen', BrugerType: 1 }
    };
  }
  render() {
    return (
      <section className='App'>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path='/' component={FrontScreen} exact />
              <Route
                path='/udbyder'
                render={props => (
                  <OrderHandler
                    {...props}
                    id={this.state.orderCreator.Id}
                    type={this.state.orderCreator.BrugerType}
                  />
                )}
              />
              <Route
                path='/vognmandOne'
                render={props => (
                  <OrderTaker
                    {...props}
                    id={this.state.vognmandOne.Id}
                    type={this.state.vognmandOne.BrugerType}
                  />
                )}
              />
              <Route
                path='/vognmandTwo'
                render={props => (
                  <OrderTaker
                    {...props}
                    id={this.state.vognmandTwo.Id}
                    type={this.state.vognmandTwo.BrugerType}
                  />
                )}
              />
              <Route
                path='/ny-ordre'
                render={props => (
                  <NewOrder {...props} id={this.state.orderCreator.Id} />
                )}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
