import React, { Component } from 'react';
import './css/FrontScreen.css';

class SecondScreen extends Component {
  render() {
    return (
      <section className='FrontScreen'>
        <div className='FrontScreen-Info'>
          <h2 className='FrontScreen-header'>
            NU ER JEG LOGGET IND SOM ORDREGIVER
          </h2>
        </div>
        <div className='FrontScreen-Konto'>
          <h2>side 2 - Ordregiver!!</h2>
        </div>
      </section>
    );
  }
}

export default SecondScreen;
