import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/NavBar.css';
import logo from './img/Logo.png';

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
        {this.props.order && (
          <>
            <NavLink className='logo-navlink' to='/udbyder'>
              <button
                id='trips'
                className={
                  (this.props.brugerType === 0 ? 'activeBtn' : '') +
                  (this.props.brugerType !== 0 && this.state.activeBtn
                    ? 'activeBtn-hover'
                    : '')
                }
                onMouseOver={() =>
                  this.props.brugerType !== 0 &&
                  this.setState({
                    activeBtn: !this.state.activeBtn
                  })
                }
                onMouseOut={() =>
                  this.props.brugerType !== 0 &&
                  this.setState({
                    activeBtn: !this.state.activeBtn
                  })
                }
              >
                Udbudte ture
              </button>
            </NavLink>
            <button className='inactiveBtn' disabled>
              Vognmand
            </button>
          </>
        )}

        {this.props.vognmand && (
          <>
            <button className='inactiveBtn' disabled>
              Udbudte ture
            </button>
            <NavLink className='logo-navlink' to='/vognmandOne'>
              <button
                id='tripTaker'
                className={
                  (this.props.brugerType === 1 ? 'activeBtn' : '') +
                  (this.props.brugerType !== 1 && this.state.activeBtn
                    ? 'activeBtn-hover'
                    : '')
                }
                onMouseOver={() =>
                  this.props.brugerType !== 1 &&
                  this.setState({
                    activeBtn: !this.state.activeBtn
                  })
                }
                onMouseOut={() =>
                  this.props.brugerType !== 1 &&
                  this.setState({
                    activeBtn: !this.state.activeBtn
                  })
                }
              >
                Vognmand
              </button>
            </NavLink>
          </>
        )}
      </div>
    );

    return (
      <div className={this.props.subMenu ? 'navBar' : 'navBar-frontpage'}>
        <div className='navLeft'>
          <div className='logo'>
            <NavLink className='logo-navlink' to='/'>
              <img id='TruckChain' src={logo} alt='TrukChain' />
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
