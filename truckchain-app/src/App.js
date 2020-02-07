import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FrontScreen from './FrontScreen';
import OrderHandler from './OrderHandler';
import OrderTaker from './OrderTaker';
import NewOrder from './NewOrder';
import MyTakenOrders from './MyTakenOrders';
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
                    orderList = {this.state.orderList}
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
                    orderList = {this.state.orderList}
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
                    orderList = {this.state.orderList}
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
                    type={this.state.vognmandOne.BrugerType}
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
