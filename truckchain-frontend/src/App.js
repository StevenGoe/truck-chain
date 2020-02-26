import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FrontScreen from './FrontScreen';
import OrderHandler from './OrderHandler';
import OrderTaker from './OrderTaker';
import NewOrder from './NewOrder';
import MyTakenOrders from './MyTakenOrders';
import Welcome from './Welcome';
import axios from 'axios';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderCreator: { Id: 'RGS', BrugerType: 0 },
      vognmandOne: { Id: 'Vognmand Jensen', BrugerType: 1 },
      vognmandTwo: { Id: 'Brødrene Rasmussen', BrugerType: 1 },
      vognID: '',
      orderList: [null]
    };
  }

  addNewOrder = order => {
    // Get all orders from contractor in the Blockchain
    // const newResult = await axios.get(`/api/order/QuaryForOwner`);
    // set the initial state from what is retrived from the Blockchain
    // this.setState({ orderList: newResult.data.payload });

    this.setState({ orderList: [...this.state.orderList, order] });
  };

  removeOrder = id => {
    this.setState({
      orderList: this.state.orderList.filter(order => order.orderId !== id)
    });
  };

  bookOrder = (id, user) => {
    // Locate the order to change
    let orderUpdate = this.state.orderList.filter(
      order => order.orderId === id
    );
    orderUpdate[0].currentStatus = 1;
    orderUpdate[0].accessibleBy = [user];

    // Måske overflødig
    this.setState(curState => ({
      orderList: curState.orderList
    }));
  };

  completeOrder = id => {
    let orderComplete = this.state.orderList.filter(
      order => order.orderId === id
    );

    orderComplete[0].currentStatus = 2;

    // Måske overflødig
    this.setState(curState => ({
      orderList: curState.orderList
    }));
  };

  updateVognID = vognID => {
    this.setState({ vognID: vognID });
  };

  async componentDidMount() {
    // Get all orders from contractor in the Blockchain
    const res = await axios.get(`/api/order/QuaryForOwner`);

    // set the initial state from what is retrived from the Blockchain
    this.setState({ orderList: res.data.payload });
  }

  render() {
    return this.state.orderList[0] ? (
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
                    orderList={this.state.orderList}
                    removeOrder={this.removeOrder}
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
                    orderList={this.state.orderList}
                    removeOrder={this.removeOrder}
                    bookOrder={this.bookOrder}
                    completeOrder={this.completeOrder}
                    updateVognID={this.updateVognID}
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
                    orderList={this.state.orderList}
                    removeOrder={this.removeOrder}
                    bookOrder={this.bookOrder}
                    completeOrder={this.completeOrder}
                    updateVognID={this.updateVognID}
                  />
                )}
              />
              <Route
                path='/ny-ordre'
                render={props => (
                  <NewOrder
                    {...props}
                    id={this.state.orderCreator.Id}
                    addNewOrder={this.addNewOrder}
                  />
                )}
              />
              <Route
                path='/mine-leverancer'
                render={props => (
                  <MyTakenOrders
                    {...props}
                    id={this.state.vognID}
                    orderList={this.state.orderList}
                    type={this.state.vognmandOne.BrugerType}
                    completeOrder={this.completeOrder}
                  />
                )}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </section>
    ) : (
      <Welcome />
    );
  }
}

export default App;
