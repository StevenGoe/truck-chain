import React, { Component } from 'react';
import Actions from './Actions';
import './css/Order.css';

class Order extends Component {
  render() {
    const { orderList, id } = this.props;

    let result = orderList
      .filter(
        order =>
          (order.accessibleBy.includes('Alle') &&
            order.currentStatus === 0 &&
            order.owner !== 'RGS Nordic') ||
          (order.accessibleBy.includes(id) &&
            order.currentStatus === 0 &&
            order.owner !== 'RGS Nordic')
      )
      .map((order, idx) => (
        <tr id={`orderlist ${idx + 1}`} key={idx} className='OrderListings'>
          <td className='Leadtext'>{idx + 1}</td>
          <td className='Leadtext'>
            Udbyder
            <p>{order.owner}</p>
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
              id={order.orderId}
              removeOrder={this.props.removeOrder}
              userID={this.props.id}
              brugerType={this.props.brugerType}
              orderStatus={order.currentStatus}
              bookOrder={this.props.bookOrder}
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
