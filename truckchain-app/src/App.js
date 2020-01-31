import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FrontScreen from './FrontScreen';
// import NavBar from './NavBar';
import Haulier from './Haulier';
import OrderHandler from './OrderHandler';
import NewOrder from './NewOrder';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderCreator: 'RGS'
    };
  }
  render() {
    return (
      <section className='App'>
        <BrowserRouter>
          <div>
            {/* <NavBar /> */}
            <Switch>
              <Route path='/' component={FrontScreen} exact />
              <Route
                path='/udbyder'
                render={props => (
                  <OrderHandler {...props} id={this.state.orderCreator} />
                )}
              />
              <Route path='/vognmandA' component={Haulier} />
              <Route path='/vognmandB' component={Haulier} />
              <Route path='/ny-ordre' component={NewOrder} />
            </Switch>
          </div>
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
