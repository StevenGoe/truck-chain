import React, { Component } from 'react';
import './css/SubMenu.css';

class SubMenu extends Component {
  render() {
    return (
      <div className='SubMenu'>
        <form>
          <input type='text' placeholder='Søg på ID, lokation m.m... ' />
        </form>
        <button className='SubMenu-IsActive-Btn'>Åbne</button>
        <button>Godkendte</button>
        <button>Aktive</button>
        <button>Afsluttet</button>
        <button>Alarmer</button>
      </div>
    );
  }
}

export default SubMenu;
