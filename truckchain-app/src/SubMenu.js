import React, { Component } from 'react';
import './css/SubMenu.css';

class SubMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBtn: this.props.activeBtn
    };
  }
  handleClick = e => {
    this.setState({ activeBtn: e.target.id });
    this.props.updateBtn(e.target.id);
  };

  render() {
    return (
      <div className='SubMenu'>
        <form>
          <input type='text' placeholder='Søg på ID, lokation m.m... ' />
        </form>
        <button
          id='open'
          onClick={this.handleClick}
          className={this.state.activeBtn === 'open' && 'SubMenu-IsActive-Btn'}
        >
          Åbne
        </button>
        <button
          id='approved'
          onClick={this.handleClick}
          className={
            this.state.activeBtn === 'approved' && 'SubMenu-IsActive-Btn'
          }
        >
          Godkendte
        </button>
        <button
          id='active'
          onClick={this.handleClick}
          className={
            this.state.activeBtn === 'active' && 'SubMenu-IsActive-Btn'
          }
        >
          Aktive
        </button>
        <button
          id='completed'
          onClick={this.handleClick}
          className={
            this.state.activeBtn === 'completed' && 'SubMenu-IsActive-Btn'
          }
        >
          Afsluttet
        </button>
      </div>
    );
  }
}

export default SubMenu;
