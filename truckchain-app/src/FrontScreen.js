import React, { Component } from 'react';
import NavBar from './NavBar';
import { NavLink } from 'react-router-dom';
import './css/FrontScreen.css';

class FrontScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <section className='FrontScreen'>
          <div className='FrontScreen-Info'>
            <h2 className='FrontScreen-header'>Bliv en del af TruckChain</h2>
            <h4>Opret en konto nu for at:</h4>
            <ul className='FrontScreen-List'>
              <li>Undgå kørsler uden last</li>
              <li>Indtjeningen og begræns miljøbelastningen.</li>
              <li>Find en tom lastvogn nær dig med kort varsel</li>
              <li>Forøg din fleksibilitet</li>
            </ul>
          </div>
          <div className='FrontScreen-Konto'>
            <h2>Opret konto eller login</h2>
            <NavLink to='/udbyder'>
              <button id='Udbyder' className='FrontScreen-Button'>
                Udbyder
              </button>
            </NavLink>
            <NavLink to='/vognmandOne'>
              <button id='VognmandOne' className='FrontScreen-Button-Split-left'>
                Vogn
              </button>
            </NavLink>
            <NavLink to='/vognmandTwo'>
              <button id='VognmandTwo' className='FrontScreen-Button-Split-right'>
                mand
              </button>
            </NavLink>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default FrontScreen;
