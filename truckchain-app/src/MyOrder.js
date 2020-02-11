import React, { Component } from 'react';
import Actions from './Actions';
import './css/Order.css';

class Order extends Component {
  render() {
    const { orderList, id, activeBtn } = this.props;
    const orderLookup = {
      open: 0,
      approved: 0,
      active: 1,
      completed: 2
    };

    let result = orderList
      .filter(
        order =>
          order.access.includes(id) &&
          order.ordreStatus === orderLookup[activeBtn]
      )
      .map((order, idx) => (
        <tr id={`orderlist ${idx + 1}`} key={idx} className='OrderListings'>
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
            <Actions
              id={order.id}
              removeOrder={this.props.removeOrder}
              brugerType={this.props.brugerType}
              orderStatus={orderLookup[activeBtn]}
              completeOrder={this.props.completeOrder}
            />
          </td>
        </tr>
      ));

    console.log(
      'current orders:',
      orderList.filter(
        order =>
          order.ejer === id + ' Nordic' &&
          order.ordreStatus === orderLookup[activeBtn]
      )
    );

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
