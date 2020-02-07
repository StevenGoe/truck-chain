import React, { Component } from 'react';
import NavBar from './NavBar';
import SubMenu from './SubMenu';
import { NavLink } from 'react-router-dom';
import Order from './Order';
import './css/OrderHandler.css';

class OrderHandler extends Component {
  static defaultProps = {
    navbarSubMenu: true
  };
  constructor(props) {
    super(props);
    // this.state = {orders: []}
    this.state = {
      active: false,
      // orderList: [
      //   {
      //     ejer: 'RGS Nordic',
      //     hentAdresse: 'Selinevej 5, 2300',
      //     hentDato: '01-03-2020',
      //     hentTid: '',
      //     levAdresse: 'Kraftværksvej 31, 2300',
      //     levDato: '01-03-2020',
      //     levTid: '',
      //     lastType: 'Beton',
      //     lastvaegt: '6',
      //     vognType: '4G',
      //     refAftale: '186768',
      //     kommentar: 'Beton, rent m/u arm. OVER 50',
      //     access: [],
      //     ordreStatus: 0,
      //     alarmDato: '',
      //     alarmTid: ''
      //   },
      //   {
      //     ejer: 'RGS Nordic',
      //     hentAdresse: 'Selinevej 5, 2300',
      //     hentDato: '01-04-2020',
      //     hentTid: '',
      //     levAdresse: 'Kraftværksvej 31, 2300',
      //     levDato: '01-04-2020',
      //     levTid: '16:00',
      //     lastType: 'Beton',
      //     lastvaegt: '20',
      //     vognType: '4G',
      //     refAftale: '186768',
      //     kommentar: 'Beton, rent m/u arm. OVER 50',
      //     access: ['Vognmand Jensen'],
      //     ordreStatus: 0,
      //     alarmDato: '',
      //     alarmTid: ''
      //   },
      //   {
      //     ejer: 'RGS Nordic',
      //     hentAdresse: 'Selinevej 5, 2300',
      //     hentDato: '02-03-2020',
      //     hentTid: '',
      //     levAdresse: 'Kraftværksvej 31, 2300',
      //     levDato: '03-03-2020',
      //     levTid: '12:00',
      //     lastType: 'Beton',
      //     lastvaegt: '10',
      //     vognType: '4G',
      //     refAftale: '186768',
      //     kommentar: 'Beton, rent m/u arm. OVER 50',
      //     access: [],
      //     ordreStatus: 0,
      //     alarmDato: '',
      //     alarmTid: ''
      //   },
      //   {
      //     ejer: 'DSV',
      //     hentAdresse: 'Asfaltfabrikken Ejby, 2600',
      //     hentDato: '02-03-2020',
      //     hentTid: '07:00',
      //     levAdresse: 'Nyhavn 28, 6200',
      //     levDato: '02-03-2020',
      //     levTid: '14:00',
      //     lastType: 'Durasplitt 2-5',
      //     lastvaegt: '39',
      //     vognType: '07SA',
      //     refAftale: '8818374',
      //     kommentar: 'Prislinje 193124',
      //     access: ['Brødrene Rasmussen'],
      //     ordreStatus: 0,
      //     alarmDato: '',
      //     alarmTid: ''
      //   }
      // ]
    };
  }

  render() {
    return (
      <div className='OrderHandler'>
        <NavBar
          loginID={this.props.id}
          brugerType={this.props.type}
          subMenu={this.props.navbarSubMenu}
          order={true}
          vognmand={false}
        />
        <div className='OrderHandler-Top-Menu'>
          <div className='OrderHandler-Top-Menu-flex'>
            <div className='OrderHandler-Top-Menu-btn active'>
              Mine udbudte ture
            </div>
            <NavLink
              className={
                this.state.active
                  ? 'OrderHandler-Top-Menu-btn active-hover'
                  : 'OrderHandler-Top-Menu-btn'
              }
              onMouseOver={() =>
                this.setState({
                  active: true
                })
              }
              onMouseOut={() =>
                this.setState({
                  active: false
                })
              }
              to='/ny-ordre'
            >
              Udbyd ny tur
            </NavLink>
          </div>
          <SubMenu />
        </div>
        <Order orderList={this.props.orderList} id={this.props.id} />
      </div>
    );
  }
}

export default OrderHandler;
