import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBtn: false
    };
  }
  render() {
    const subMenu = this.props.subMenu && (
      <div className='navSub'>
        <NavLink className='logo-navlink' to='/udbyder'>
          <button className='activeBtn'>Udbudte ture</button>
        </NavLink>
        <button
          className={this.state.activeBtn && 'activeBtn-hover'}
          onMouseOver={() =>
            this.setState({
              activeBtn: !this.state.activeBtn
            })
          }
          onMouseOut={() =>
            this.setState({
              activeBtn: !this.state.activeBtn
            })
          }
        >
          Vognmand
        </button>
      </div>
    );
    return (
      <div className={this.props.subMenu ? 'navBar' : 'navBar-frontpage'}>
        <div className='navLeft'>
          <div className='logo'>
            <NavLink className='logo-navlink' to='/'>
              Logo
            </NavLink>
          </div>
        </div>
        {subMenu}
        <div className='navRight'>
          {this.props.loginID}
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
