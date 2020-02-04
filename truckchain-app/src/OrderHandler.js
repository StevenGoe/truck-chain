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
      orderList: [
        {
          ejer: 'RGS Nordic',
          id: 1,
          hentAdresse: 'Selinevej 5',
          hentDato: '01032020',
          hentTid: '',
          levAdresse: 'Kraftværksvej 31',
          levDato: '01032020',
          levTid: '',
          lastType: 'Beton',
          lastvaegt: '6',
          vognType: '4G',
          refAftale: '186768',
          kommentar: 'Beton, rent m/u arm. OVER 50',
          alarmDato: '',
          alarmTid: ''
        }
      ]
    };
  }

  render() {
    return (
      <div className='OrderHandler'>
        <NavBar
          loginID={this.props.id}
          brugerType={this.props.type}
          subMenu={this.props.navbarSubMenu}
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
          <table className='OrderHandler-table-header'>
            <thead>
              <tr>
                <td>Identifikation</td>
                <td>Lastspecifikationer</td>
                <td>Afhentningsadresse</td>
                <td>Afhentningstidspunkt</td>
                <td>Leveringssadresse</td>
                <td>Leveringstidspunkt</td>
                <td>Mulige handlinger</td>
              </tr>
            </thead>
          </table>
        </div>
        <Order orderList = {this.state.orderList}/>
      </div>
    );
  }
}

export default OrderHandler;
