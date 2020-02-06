import React, { Component } from 'react';
import Actions from './Actions';
import './css/Order.css';

class Order extends Component {
  render() {

    const { orderList } = this.props;
    let result = orderList.map((order, idx) => (
      <tr id={`orderlist ${idx + 1}`} key={idx} className='OrderListings' >
        <td className='Leadtext'>{idx + 1}</td>
        <td className='Leadtext'>
          {order.lastType}
          <p>Vægt: {order.lastvaegt} Ton</p>
          <p>Vogntype: {order.vognType}</p>
        </td>
        <td className='Leadtext'>
          {order.ejer}
          <p>{order.hentAdresse}</p>
        </td>
        <td className='Leadtext'>
          {order.hentDato}
          <p className='Leadtext'>{order.hentTid}</p>
        </td>
        <td className='Leadtext'>{order.levAdresse}</td>
        <td className='Leadtext'>
          {order.levDato}
          <p className='Leadtext'>{order.levTid}</p>
        </td>
        <td>
          <Actions />
        </td>
      </tr>
    ));

    return (
      <>
        <table className='Order-Header'>
          <thead>
            <tr className='Order-Header-Headings'>
              <td>Identifikation</td>
              <td>Lastspecifikationer</td>
              <td>Afhentningsadresse</td>
              <td>Afhentningstidspunkt</td>
              <td>Leveringssadresse</td>
              <td>Leveringstidspunkt</td>
              <td>Mulige handlinger</td>
            </tr>
            {result}
          </thead>
        </table>
      </>
    );
  }
}

export default Order;
