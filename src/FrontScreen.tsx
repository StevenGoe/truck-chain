import React, { Component } from 'react';
import './css/FrontScreen.css';

class FrontScreen extends Component {
  render() {
    return (
      <section className='FrontScreen'>
        <div className='FrontScreen-Info'>
          <h2 className ='FrontScreen-header'>Bliv en del af TruckChain</h2>
          <h4>Opret en konto nu for at:</h4>
          <ul className='FrontScreen-List'>
            <li>Undgå kørsler uden last</li>
            <li>Indtjeningen og begræns miljøbelastningen.</li>
            <li>Find en tom lastvogn nær dig med kort varsel</li>
            <li>Forøg din fleksibilitet</li>
          </ul>
        </div>
        <div className='FrontScreen-Konto'>
          <h2>Opret ny konto eller login</h2>
          <button className='FrontScreen-Button'>Udbyder</button>
          <button className='FrontScreen-Button'>Vognmand</button>
        </div>
      </section>
    );
  }
}

export default FrontScreen;
