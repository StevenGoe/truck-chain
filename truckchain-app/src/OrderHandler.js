import React, { Component } from 'react';
import NavBar from './NavBar';
import SubMenu from './SubMenu';
import { NavLink } from 'react-router-dom';
import Order from './Order';
import './css/OrderHandler.css';

class OrderHandler extends Component {
  static defaultProps = {
    navbarSubMenu: true
  };
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      activeSubmenuBtn: 'open'
    };
  }

  updateBtn = subMenuBtn => {
    this.setState({ activeSubmenuBtn: subMenuBtn });
  };

  render() {
    console.log('The new active submenu btn:', this.state.activeSubmenuBtn);
    return (
      <div className='OrderHandler'>
        <NavBar
          loginID={this.props.id}
          brugerType={this.props.type}
          subMenu={this.props.navbarSubMenu}
          order={true}
          vognmand={false}
        />
        <div className='OrderHandler-Top-Menu'>
          <div className='OrderHandler-Top-Menu-flex'>
            <div className='OrderHandler-Top-Menu-btn active'>
              Mine udbudte ture
            </div>
            <NavLink
              className={
                this.state.active
                  ? 'OrderHandler-Top-Menu-btn active-hover'
                  : 'OrderHandler-Top-Menu-btn'
              }
              onMouseOver={() =>
                this.setState({
                  active: true
                })
              }
              onMouseOut={() =>
                this.setState({
                  active: false
                })
              }
              to='/ny-ordre'
            >
              Udbyd ny tur
            </NavLink>
          </div>
          <SubMenu
            activeBtn={this.state.activeSubmenuBtn}
            updateBtn={this.updateBtn}
            brugerType={this.props.type}
          />
        </div>
        <Order
          orderList={this.props.orderList}
          id={this.props.id}
          removeOrder={this.props.removeOrder}
          brugerType={this.props.type}
          activeBtn={this.state.activeSubmenuBtn}
        />
      </div>
    );
  }
}

export default OrderHandler;
