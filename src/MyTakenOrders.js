import React, { Component } from 'react';
import NavBar from './NavBar';
import SubMenu from './SubMenu';
import { NavLink } from 'react-router-dom';
import MyOrder from './MyOrder';

class MyTakenOrders extends Component {
  static defaultProps = {
    navbarSubMenu: true
  };
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      activeSubmenuBtn: 'active'
    };
  }

  updateBtn = subMenuBtn => {
    this.setState({ activeSubmenuBtn: subMenuBtn });
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
        <div className='MyTakenOrder-Top-Menu'>
          <div className='OrderHandler-Top-Menu-flex'>
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
              to={this.props.id === 'Vognmand Jensen' ? '/VognmandOne' : '/VognmandTwo'}
            >
              Alle leverancer
            </NavLink>
            <NavLink
              className='OrderHandler-Top-Menu-btn active'
              to='/mine-leverancer'
            >
              Mine leverancer
            </NavLink>
          </div>
          <SubMenu
            activeBtn={this.state.activeSubmenuBtn}
            updateBtn={this.updateBtn}
            brugerType={this.props.type}
          />
        </div>
        <MyOrder
          orderList={this.props.orderList}
          id={this.props.id}
          brugerType={this.props.type}
          activeBtn={this.state.activeSubmenuBtn}
          completeOrder={this.props.completeOrder}
        />
      </div>
    );
  }
}

export default MyTakenOrders;
