import React, { Component } from 'react';
import NavBar from './NavBar';
import SubMenuFilter from './SubMenuFilter';
import OrdersToTake from './OrdersToTake';
import { NavLink } from 'react-router-dom';
import './css/FrontScreen.css';

class OrderTaker extends Component {
  static defaultProps = {
    navbarSubMenu: true
  };
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      vognID: this.props.id
    };
  }

  handleClick = () => {
    this.props.updateVognID(this.state.vognID);
  };
  render() {
    return (
      <div className='OrderTaker'>
        <NavBar
          loginID={this.props.id}
          brugerType={this.props.type}
          subMenu={this.props.navbarSubMenu}
          order={false}
          vognmand={true}
        />
        <div className='OrderTaker-Top-Menu'>
          <div className='OrderHandler-Top-Menu-flex'>
            <NavLink
              className='OrderHandler-Top-Menu-btn active'
              to='/VognmandOne'
            >
              Alle leverancer
            </NavLink>
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
              onClick={this.handleClick}
              to='/mine-leverancer'
            >
              Mine leverancer
            </NavLink>
          </div>
          <SubMenuFilter />
        </div>
        <OrdersToTake
          orderList={this.props.orderList}
          id={this.props.id}
          removeOrder={this.props.removeOrder}
          brugerType={this.props.type}
          bookOrder={this.props.bookOrder}
          completeOrder={this.props.completeOrder}
        />
      </div>
    );
  }
}

export default OrderTaker;
