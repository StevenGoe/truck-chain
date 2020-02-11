import React, { Component } from 'react';
import './css/Actions.css';

class Actions extends Component {
  // constructor(props) {
  //   super(props);
  // }

  handleClick = () => {
    this.props.removeOrder(this.props.id);
  };

  handleBooking = () => {
    // e.preventDefault();
    this.props.bookOrder(this.props.id, this.props.userID);
    // console.log(this.props.userID)
  };

  render() {
    const btn = {
      background: 'inherit',
      padding: '0.25rem',
      margin: '0.25rem 0',
      minWidth: '75%',
      border: '1px solid ',
      borderRadius: '2rem',
      fontSize: '0.6rem'
    };

    const actionView =
      this.props.brugerType === 0 ? (
        <div className='Actions'>
          <button style={btn}>
            <i className='fas fa-pen'></i>Redigér
          </button>
          <button style={btn}>
            <i className='fas fa-copy'></i>Kopiér
          </button>
          <button style={btn} onClick={this.handleClick}>
            <i className='fas fa-trash-alt'></i>Fjern
          </button>
        </div>
      ) : (
        <div className='Actions'>
          <button style={btn} onClick={this.handleBooking}>
            <i className='fas fa-truck'></i>Book Ordre
          </button>
        </div>
      );
    return <div>{actionView}</div>;
  }
}

export default Actions;
