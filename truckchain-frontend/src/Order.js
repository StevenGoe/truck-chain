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
          order.owner === id && order.currentStatus === orderLookup[activeBtn]
      )
      .map((order, idx) => (
        <tr id={`orderlist ${idx + 1}`} key={idx} className='OrderListings'>
          <td className='Leadtext'>{idx + 1}</td>
          <td className='Leadtext'>
            {order.currentStatus === 0 ? 'Udbudt til' : 'Transportør'}
            <p>{order.accessibleBy}</p>
          </td>
          <td className='Leadtext'>
            {order.material}
            <p>Vægt: {order.unit} Ton</p>
            <p>Vogntype: {order.truckType}</p>
          </td>
          <td className='Leadtext'>
            <p className='Leadtext'>Adresse</p>
            <p>{order.fromAddress}</p>
            <p className='Leadtext OrderListings-spacing'>Tidspunkt</p>
            <p>{order.jobStart}</p>
            <p>{order.jobStartTime}</p>
          </td>
          <td className='Leadtext'>
            <p className='Leadtext'>Adresse</p>
            <p>{order.toAddress}</p>
            <p className='Leadtext OrderListings-spacing'>Tidspunkt</p>
            <p>{order.jobEnd}</p>
            <p>{order.jobEndTime}</p>
          </td>
          <td>
            <Actions
              id={order.id}
              removeOrder={this.props.removeOrder}
              brugerType={this.props.brugerType}
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
              <td>Vognmandsinfo</td>
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
