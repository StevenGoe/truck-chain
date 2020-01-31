import React, { Component } from 'react';
import NavBar from './NavBar';

class NewOrder extends Component {
  static defaultProps = {
    navbarSubMenu: true
  };
  render() {
    return (
      <div className='NewOrder'>
        <NavBar loginID={this.props.id} subMenu={this.props.navbarSubMenu} />
        <h1>New Order</h1>
      </div>
    );
  }
}

export default NewOrder;
