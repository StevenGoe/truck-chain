import React, { Component } from 'react';
import './css/Actions.css';

class Actions extends Component {
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
    return (
      <div className='Actions'>
        <button style={btn}>
          <i className='fas fa-pen'></i>Redigér
        </button>
        <button style={btn}>
          <i className='fas fa-copy'></i>Kopiér
        </button>
        <button style={btn}>
          <i className='fas fa-trash-alt'></i>Fjern
        </button>
      </div>
    );
  }
}

export default Actions;
