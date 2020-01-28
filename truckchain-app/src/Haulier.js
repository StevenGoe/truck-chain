import React, { Component } from 'react';
import './css/FrontScreen.css';

class Haulier extends Component {
  render() {
    return (
      <section className='FrontScreen'>
        <div className='FrontScreen-Info'>
          <h2 className='FrontScreen-header'>
            NU ER JEG LOGGET IND SOM VOGNMAND
          </h2>
        </div>
        <div className='FrontScreen-Konto'>
          <h2>side 3 - Vognmand!!</h2>
        </div>
      </section>
    );
  }
}

export default Haulier;
