import React, { Component } from 'react';
import NavBar from './NavBar';
import SubMenu from './SubMenu';
import { NavLink } from 'react-router-dom';

class MyTakenOrders extends Component {
  static defaultProps = {
    navbarSubMenu: true
  };
  constructor(props) {
    super(props);
    // this.state = {orders: []}
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <div>
        <NavBar
          loginID={this.props.id}
          brugerType={this.props.type}
          subMenu={this.props.navbarSubMenu}
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
              to='/VognmandOne'
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
          <SubMenu />
          <table className='OrderHandler-table-header'>
            <thead>
              <tr>
                <td>Afhentningsadresse</td>
                <td>Afhentningstidspunkt</td>
                <td>Forventet pris</td>
                <td>Leveringssadresse</td>
                <td>Leveringstidspunkt</td>
                <td>Lastspecifikationer</td>
                <td>Mulige handlinger</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}

export default MyTakenOrders;
