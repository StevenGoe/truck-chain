import React, { Component } from 'react';
import NavBar from './NavBar';
import SubMenu from './SubMenu';
import './css/OrderHandler.css';

class OrderHandler extends Component {
  constructor(props) {
    super(props);
    // this.state = {orders: []}
  }
  render() {
    return (
      <div className='OrderHandler'>
        {/* <NavBar buttonOrder={} buttonHaulier={} /> */}
        <NavBar loginID = {this.props.id}/>
        <div className='OrderHandler-Top-Menu'>
          <div className='OrderHandler-Top-Menu-flex'>
            <a className='OrderHandler-Top-Menu-btn active'>
              Mine udbudte ture
            </a>
            <a className='OrderHandler-Top-Menu-btn'>Udbyd ny tur</a>
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
      </div>
    );
  }
}

export default OrderHandler;
