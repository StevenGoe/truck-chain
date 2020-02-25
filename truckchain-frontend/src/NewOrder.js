import React, { Component } from 'react';
import NavBar from './NavBar';
import { NavLink } from 'react-router-dom';
import './css/NewOrder.css';
import { makeId } from './util';

class NewOrder extends Component {
  static defaultProps = {
    navbarSubMenu: true
  };
  constructor(props) {
    super(props);
    this.state = {
      order: {
        orderId: '',
        owner:
          this.props.id === 'RGS' ? this.props.id + ' Nordic' : this.props.id,
        fromAddress: '',
        jobStart: '',
        jobStartTime: '',
        toAddress: '',
        jobEnd: '',
        jobEndTime: '',
        material: '',
        unit: '',
        truckType: '',
        orderType: '',
        specialConditions: '',
        accessibleBy: ['Alle'],
        alarmDate: '',
        alarmTime: ''
      }
    };
    this.basestate = this.state;
  }

  handleChange = evt => {
    // 1 take a copy of the existing state
    const order = { ...this.state.order };
    // 2 Add our new orderinfo to that order varialbes
    if (evt.target.name === 'accessibleBy') {
      order[evt.target.name] = [evt.target.value][0].trim().split(',');
    } else {
      order[evt.target.name] = evt.target.value;
    }
    // 3. Set the new order obj to state
    this.setState({ order });
  };

  handleSubmit = async evt => {
    // 1. Push the order to the main state
    const order = { ...this.state.order };
    const orderId = makeId();
    order.orderId = orderId;

    await fetch(`/api/order/${order.orderId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order
      })
    });

    // 2.Update global orderlist
    this.props.addNewOrder();
  };

  render() {
    return (
      <div className='NewOrder'>
        <div className='NewOrder-Topbar'>
          <NavBar loginID={this.props.id} subMenu={this.props.navbarSubMenu} />
          <section className='NewOrder-Submenu'>
            <h1>Oprettelse af ny tur</h1>
            <div>
              <NavLink className='NewOrder-Submenu-btn-cancel' to='/udbyder'>
                Fortryd Oprettelse
              </NavLink>
              <NavLink
                onClick={this.handleSubmit}
                className='NewOrder-Submenu-btn-create'
                to='/udbyder'
              >
                Opret Udbud
              </NavLink>
            </div>
          </section>
          <table className='OrderHandler-table-header-newOrder'>
            <thead>
              <tr>
                <td>Afhentning</td>
                <td>Levering</td>
                <td>Specifikationer</td>
                <td>Alarm</td>
              </tr>
            </thead>
          </table>
        </div>
        <form>
          <table className='NewOrder-Form-Thead-Pickup'>
            <tbody>
              <tr>
                <td>
                  <label htmlFor='fromAddress'>Afhentningsadresse *</label>
                  <input
                    type='text'
                    id='fromAddress'
                    name='fromAddress'
                    placeholder='Vælg adresse'
                    required
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='jobStart'>Afhentningsdato</label>
                  <input
                    type='date'
                    name='jobStart'
                    placeholder='Vælg dato'
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='jobStartTime'>Afhentningstidspunkt</label>
                  <input
                    type='time'
                    name='jobStartTime'
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <table className='NewOrder-Form-Thead-Pickup'>
            <tbody>
              <tr>
                <td>
                  <label htmlFor='toAddress'>Leveringsadresse *</label>
                  <input
                    type='text'
                    id='toAddress'
                    name='toAddress'
                    placeholder='Vælg adresse'
                    required
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='jobEnd'>Leveringsdato</label>
                  <input
                    type='date'
                    name='jobEnd'
                    placeholder='Vælg dato'
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='jobEndTime'>Leveringstidspunkt</label>
                  <input
                    type='time'
                    name='jobEndTime'
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <table className='NewOrder-Form-Thead-Pickup'>
            <tbody>
              <tr>
                <td>
                  <label htmlFor='material'>Lasttype *</label>
                  <input
                    type='text'
                    id='material'
                    name='material'
                    placeholder='Indtast lasttype'
                    required
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='unit'>Lastvægt *</label>
                  <input
                    type='number'
                    name='unit'
                    placeholder='Indtast vægt i tons'
                    required
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='truckType'>Vogn type</label>
                  <input
                    type='truckType'
                    name='truckType'
                    placeholder='Indtast anhængertype'
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='accessibleBy'>Vognmand (blank = alle)</label>
                  <input
                    type='text'
                    name='accessibleBy'
                    placeholder='Indtast Vognmand'
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='orderType'>Rammeaftale</label>
                  <input
                    type='text'
                    name='orderType'
                    placeholder='Reference til rammeaftale'
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='specialConditions'>Kommentar</label>
                  <input
                    type='text'
                    name='specialConditions'
                    placeholder='Yderligere kommentarer..'
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <table className='NewOrder-Form-Thead-Pickup'>
            <tbody>
              <tr>
                <td>
                  <p>
                    Tidsfrist for hvornår fragtaftalen senest skal være på
                    plads.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='alarmDate'>Alarmdato</label>
                  <input
                    type='date'
                    name='alarmDate'
                    placeholder='Vælg dato'
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='alarmTime'>Alarmtidspunkt</label>
                  <input
                    type='time'
                    name='alarmTime'
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default NewOrder;
