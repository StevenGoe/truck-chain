import React, { Component } from 'react';
import './css/Actions.css';

class Actions extends Component {
  handleClick = () => {
    this.props.removeOrder(this.props.id);
  };

  handleBooking = e => {
    // e.preventDefault();
    e.target.innerText === 'Book Ordre'
      ? this.props.bookOrder(this.props.id, this.props.userID)
      : this.props.completeOrder(this.props.id);
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
    // const actionView = () => {
    //   if (this.props.brugerType === 0) {
    //     return (
    //       <div className='Actions'>
    //         <button style={btn}>
    //           <i className='fas fa-pen'></i>Redigér
    //         </button>
    //         <button style={btn}>
    //           <i className='fas fa-copy'></i>Kopiér
    //         </button>
    //         <button style={btn} onClick={this.handleClick}>
    //           <i className='fas fa-trash-alt'></i>Fjern
    //         </button>
    //       </div>
    //     );
    //   } else if (this.props.orderStatus === 0) {
    //     return (
    //       <div className='Actions'>
    //         <button style={btn} onClick={this.handleBooking}>
    //           <i className='fas fa-truck'></i>Book Ordre
    //         </button>
    //       </div>
    //     );
    //   } else if (this.props.orderStatus === 1) {
    //     return (
    //       <div className='Actions'>
    //         <button style={btn}>
    //           <i className='fas fa-file-alt'></i>Detaljer
    //         </button>
    //         <button style={btn} onClick={this.handleBooking}>
    //           <i className='fas fa-check-circle'></i>Afslut
    //         </button>
    //       </div>
    //     );
    //   } else {
    //     return (
    //       <div className='Actions'>
    //         <button style={btn} onClick={this.handleBooking}>
    //           <i className='fas fa-truck'></i>Virker det?
    //         </button>
    //       </div>
    //     );
    //   }
    // };

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
          {this.props.orderStatus !== 1 ? (
            <button style={btn} onClick={this.handleBooking}>
              <i className='fas fa-truck'></i>Book Ordre
            </button>
          ) : (
            // <button style={btn} onClick={this.handleBooking}>
            //   <i className='fas fa-truck'></i>Virker det?
            // </button>

            <div>
              <button style={btn}>
                <i className='fas fa-file-alt'></i>Detaljer
              </button>
              <button style={btn} onClick={this.handleBooking}>
                <i className='fas fa-check-circle'></i>Afslut
              </button>
            </div>
          )}
        </div>
      );

    return <div>{actionView}</div>;
  }
}

export default Actions;
