import React, { Component } from 'react';
import './css/NavBar.css';

class NavBar extends Component {
  render() {

    return (
      <div className='navBar'>
        <div className='navLeft'>
          <a className='logo' href='#Logo'>
            Logo
          </a>
        </div>
        <div className='navRight'>
          <a href='#alert'>
            <i className='far fa-bell fa-lg'></i>
          </a>
          <a href='#profile'>
            <i className='far fa-user-circle fa-lg'></i>
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
