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
            Udbyder
            <p>{order.ejer}</p>
          </td>
          <td className='Leadtext'>
            {order.lastType}
            <p>Vægt: {order.lastvaegt} Ton</p>
            <p>Vogntype: {order.vognType}</p>
          </td>
          <td className='Leadtext'>
            <p className='Leadtext'>Adresse</p>
            <p>{order.hentAdresse}</p>
            <p className='Leadtext OrderListings-spacing'>Tidspunkt</p>
            <p>{order.hentDato}</p>
            <p>{order.hentTid}</p>
          </td>
          <td className='Leadtext'>
            <p className='Leadtext'>Adresse</p>
            <p>{order.levAdresse}</p>
            <p className='Leadtext OrderListings-spacing'>Tidspunkt</p>
            <p>{order.levDato}</p>
            <p>{order.levTid}</p>
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

    return (
      <>
        <table className='Order-Header'>
          <thead>
            <tr className='Order-Header-Headings'>
              <td>Identifikation</td>
              <td>Ordreinfo</td>
              <td>Lastspecifikationer</td>
              <td>Afhentning</td>
              <td>Leverings</td>
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
