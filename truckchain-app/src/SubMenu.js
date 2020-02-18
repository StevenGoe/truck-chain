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
    const orderHandlerType = this.props.brugerType === 0 && (
      <div className='SubMenu'>
        <form>
          <input type='text' placeholder='Søg på ID, lokation m.m... ' />
        </form>
        <button
          id='open'
          onClick={this.handleClick}
          className={
            this.state.activeBtn === 'open' ? 'SubMenu-IsActive-Btn' : undefined
          }
        >
          Åbne
        </button>
        <button
          id='approved'
          onClick={this.handleClick}
          className={
            this.state.activeBtn === 'approved'
              ? 'SubMenu-IsActive-Btn'
              : undefined
          }
        >
          Godkendte
        </button>
        <button
          id='active'
          onClick={this.handleClick}
          className={
            this.state.activeBtn === 'active'
              ? 'SubMenu-IsActive-Btn'
              : undefined
          }
        >
          Aktive
        </button>
        <button
          id='completed'
          onClick={this.handleClick}
          className={
            this.state.activeBtn === 'completed'
              ? 'SubMenu-IsActive-Btn'
              : undefined
          }
        >
          Afsluttet
        </button>
      </div>
    );

    const orderTakerType = this.props.brugerType === 1 && (
      <div className='SubMenu'>
        <form>
          <input type='text' placeholder='Søg på ID, lokation m.m... ' />
        </form>

        <button
          id='active'
          onClick={this.handleClick}
          className={
            this.state.activeBtn === 'active'
              ? 'SubMenu-IsActive-Btn'
              : undefined
          }
        >
          Aktive
        </button>
        <button
          id='completed'
          onClick={this.handleClick}
          className={
            this.state.activeBtn === 'completed'
              ? 'SubMenu-IsActive-Btn'
              : undefined 
          }
        >
          Afsluttet
        </button>
      </div>
    );
    return this.props.brugerType === 0 ? orderHandlerType : orderTakerType;
  }
}

export default SubMenu;
