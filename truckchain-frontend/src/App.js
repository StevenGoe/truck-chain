import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FrontScreen from './FrontScreen';
import OrderHandler from './OrderHandler';
import OrderTaker from './OrderTaker';
import NewOrder from './NewOrder';
import MyTakenOrders from './MyTakenOrders';
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
      orderList: [
        {
          ejer: 'RGS Nordic',
          hentAdresse: 'Selinevej 5, 2300',
          hentDato: '01-03-2020',
          levAdresse: 'Kraftværksvej 31, 2300',
          levDato: '01-03-2020',
          lastType: 'Beton',
          lastvaegt: '6',
          vognType: '4G',
          refAftale: '186768',
          kommentar: 'Beton, rent m/u arm. OVER 50',
          access: ['Alle']
        },
        {
          ejer: 'RGS Nordic',
          hentAdresse: 'Selinevej 5, 2300',
          hentDato: '01-04-2020',
          levAdresse: 'Kraftværksvej 31, 2300',
          levDato: '01-04-2020',
          levTid: '16:00',
          lastType: 'Beton',
          lastvaegt: '20',
          vognType: '4G',
          refAftale: '186768',
          kommentar: 'Beton, rent m/u arm. OVER 50',
          access: ['Vognmand Jensen']
        },
        {
          ejer: 'RGS Nordic',
          hentAdresse: 'Selinevej 5, 2300',
          hentDato: '02-03-2020',
          levAdresse: 'Kraftværksvej 31, 2300',
          levDato: '03-03-2020',
          levTid: '12:00',
          lastType: 'Beton',
          lastvaegt: '10',
          vognType: '4G',
          refAftale: '186768',
          kommentar: 'Beton, rent m/u arm. OVER 50'
        }
      ]
    };
  }

  addNewOrder = async () => {
    // Get all orders from contractor in the Blockchain
    const newResult = await axios.get(`/api/order/QuaryForOwner`);
    // set the initial state from what is retrived from the Blockchain
    this.setState({ orderList: newResult.data.payload });
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
    );
  }
}

export default App;
