import React, { Component } from 'react';
import Actions from './Actions';
import './css/Order.css';

class Order extends Component {
  render() {
    let result;
    if (this.props.orderList[0] !== undefined) {
      result = (
        <div className='OrderListing'>
          <span>{this.props.orderList[0].id} </span>
          <span>{this.props.orderList[0].lastType} </span>
          <span>{this.props.orderList[0].hentAdresse} </span>
          <span>{this.props.orderList[0].hentDato} </span>
          <span>{this.props.orderList[0].levAdresse} </span>
          <span>{this.props.orderList[0].levDato} </span>
          <span>
            <Actions />{' '}
          </span>
        </div>
      );
    } else {
      result = '';
    }

    return <div>{result}</div>;
  }
}

export default Order;
