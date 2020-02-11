import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FrontScreen from './FrontScreen';
import OrderHandler from './OrderHandler';
import OrderTaker from './OrderTaker';
import NewOrder from './NewOrder';
import MyTakenOrders from './MyTakenOrders';
import uuid from 'uuid/v4';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderCreator: { Id: 'RGS', BrugerType: 0 },
      vognmandOne: { Id: 'Vognmand Jensen', BrugerType: 1 },
      vognmandTwo: { Id: 'Brødrene Rasmussen', BrugerType: 1 },
      orderList: [
        {
          id: uuid(),
          ejer: 'RGS Nordic',
          hentAdresse: 'Selinevej 5, 2300',
          hentDato: '01-03-2020',
          hentTid: '',
          levAdresse: 'Kraftværksvej 31, 2300',
          levDato: '01-03-2020',
          levTid: '',
          lastType: 'Beton',
          lastvaegt: '6',
          vognType: '4G',
          refAftale: '186768',
          kommentar: 'Beton, rent m/u arm. OVER 50',
          access: ['All'],
          ordreStatus: 0,
          alarmDato: '',
          alarmTid: ''
        },
        {
          id: uuid(),
          ejer: 'RGS Nordic',
          hentAdresse: 'Selinevej 5, 2300',
          hentDato: '01-04-2020',
          hentTid: '',
          levAdresse: 'Kraftværksvej 31, 2300',
          levDato: '01-04-2020',
          levTid: '16:00',
          lastType: 'Beton',
          lastvaegt: '20',
          vognType: '4G',
          refAftale: '186768',
          kommentar: 'Beton, rent m/u arm. OVER 50',
          access: ['Vognmand Jensen'],
          ordreStatus: 0,
          alarmDato: '',
          alarmTid: ''
        },
        {
          id: uuid(),
          ejer: 'RGS Nordic',
          hentAdresse: 'Selinevej 5, 2300',
          hentDato: '02-03-2020',
          hentTid: '',
          levAdresse: 'Kraftværksvej 31, 2300',
          levDato: '03-03-2020',
          levTid: '12:00',
          lastType: 'Beton',
          lastvaegt: '10',
          vognType: '4G',
          refAftale: '186768',
          kommentar: 'Beton, rent m/u arm. OVER 50',
          access: ['All'],
          ordreStatus: 0,
          alarmDato: '',
          alarmTid: ''
        },
        {
          id: uuid(),
          ejer: 'DSV',
          hentAdresse: 'Asfaltfabrikken Ejby, 2600',
          hentDato: '02-03-2020',
          hentTid: '07:00',
          levAdresse: 'Nyhavn 28, 6200',
          levDato: '02-03-2020',
          levTid: '14:00',
          lastType: 'Durasplitt 2-5',
          lastvaegt: '39',
          vognType: '07SA',
          refAftale: '8818374',
          kommentar: 'Prislinje 193124',
          access: ['Brødrene Rasmussen'],
          ordreStatus: 0,
          alarmDato: '',
          alarmTid: ''
        }
      ]
    };
  }

  removeOrder = id => {
    this.setState({
      orderList: this.state.orderList.filter(order => order.id !== id)
    });
  };

  bookOrder = (id, user) => {
    // Locate the order to change
    let orderUpdate = this.state.orderList.filter(order => order.id === id);
    orderUpdate[0].ordreStatus = 1;
    orderUpdate[0].access = [user];

    this.setState(curState => ({
      // orderList: curState.orderList.filter(order => order.id !== id),
      // orderUpdate

      orderList: curState.orderList
    }));
  };

  completeOrder = id => {
    let orderComplete = this.state.orderList.filter(order => order.id === id);
    orderComplete[0].ordreStatus = 2;

    this.setState(curState => ({
      orderList: curState.orderList
    }));
  };

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
                    // bookOrder={this.bookOrder}
                    // completeOrder={this.completeOrder}
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
                  />
                )}
              />
              <Route
                path='/ny-ordre'
                render={props => (
                  <NewOrder {...props} id={this.state.orderCreator.Id} />
                )}
              />
              <Route
                path='/mine-leverancer'
                render={props => (
                  <MyTakenOrders
                    {...props}
                    id={this.state.vognmandOne.Id}
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
