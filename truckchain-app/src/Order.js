import React, { Component } from 'react';
import Actions from './Actions';
import './css/Order.css';

class Order extends Component {
  render() {
    const { orderList } = this.props;
    let result = orderList.map((order, idx) => (
      <div id={`orderlist ${idx + 1}`} key={idx} className='OrderListing'>
        <p className='Leadtext'>{idx + 1}</p>
        <p className='Leadtext'>
          {order.lastType}
          <p>Vægt: {order.lastvaegt} Ton</p>
          <p>Vogntype: {order.vognType}</p>
        </p>
        <p className='Leadtext'>
          {order.ejer}
          <p>{order.hentAdresse}</p>
        </p>
        <p className='Leadtext'>
          {order.hentDato}
          <p className='Leadtext'>{order.hentTid}</p>
        </p>
        <p className='Leadtext'>{order.levAdresse}</p>
        <p className='Leadtext'>
          {order.levDato}
          <p className='Leadtext'>{order.levTid}</p>
        </p>
        <p>
          <Actions />
        </p>
      </div>
    ));

    return <>{result}</>;
  }
}

export default Order;
