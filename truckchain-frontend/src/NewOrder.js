import React, { Component } from 'react';
import NavBar from './NavBar';
import { NavLink } from 'react-router-dom';
import './css/NewOrder.css';
import { makeId } from './util';
import axios from 'axios';

class NewOrder extends Component {
  static defaultProps = {
    navbarSubMenu: true
  };
  constructor(props) {
    super(props);
    this.state = {
      order: {
        orderId: '',
        ejer:
          this.props.id === 'RGS' ? this.props.id + ' Nordic' : this.props.id,
        hentAdresse: '',
        hentDato: '',
        hentTid: '',
        levAdresse: '',
        levDato: '',
        levTid: '',
        lastType: '',
        lastvaegt: '',
        vognType: '',
        refAftale: '',
        kommentar: '',
        access: ['Alle'],
        ordreStatus: 0,
        alarmDato: '',
        alarmTid: ''
      }
    };
    this.basestate = this.state;
  }

  handleChange = evt => {
    // 1 take a copy of the existing state
    const order = { ...this.state.order };
    // 2 Add our new orderinfo to that order varialbes
    if (evt.target.name === 'access') {
      order[evt.target.name] = [evt.target.value];
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

    console.log('Post request will use this order', JSON.stringify(order));

    const res = await fetch(`/api/order/${order.orderId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          name: 'John',
          email: 'john@example.com'
        }
      })
    });
    const result = await res.json();

    console.log('this is the result of the post request', result);

    // const res = await axios({
    //   method: 'post',
    //   url: `/api/order/${order.orderId}`,
    //   data: {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    //   }
    // });

    // await console.log('This is res', res.data);

    // const result = await res.json();

    // this.props.addNewOrder(order);

    // 2. reset local state
    this.setState({ order: this.basestate.order });
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
                  <label htmlFor='hentAdresse'>Afhentningsadresse *</label>
                  <input
                    type='text'
                    id='hentAdresse'
                    name='hentAdresse'
                    placeholder='Vælg adresse'
                    required
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='hentDato'>Afhentningsdato</label>
                  <input
                    type='date'
                    name='hentDato'
                    placeholder='Vælg dato'
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='hentTid'>Afhentningstidspunkt</label>
                  <input
                    type='time'
                    name='hentTid'
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
                  <label htmlFor='levAdresse'>Leveringsadresse *</label>
                  <input
                    type='text'
                    id='levAdresse'
                    name='levAdresse'
                    placeholder='Vælg adresse'
                    required
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='levDato'>Leveringsdato</label>
                  <input
                    type='date'
                    name='levDato'
                    placeholder='Vælg dato'
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='levTid'>Leveringstidspunkt</label>
                  <input
                    type='time'
                    name='levTid'
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
                  <label htmlFor='lastType'>Lasttype *</label>
                  <input
                    type='text'
                    id='lastType'
                    name='lastType'
                    placeholder='Indtast lasttype'
                    required
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='lastvaegt'>Lastvægt *</label>
                  <input
                    type='number'
                    name='lastvaegt'
                    placeholder='Indtast vægt i tons'
                    required
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='vognType'>Vogntype</label>
                  <input
                    type='vognType'
                    name='vognType'
                    placeholder='Indtast anhængertype'
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='access'>Vognmand (blank = alle)</label>
                  <input
                    type='text'
                    name='access'
                    placeholder='Indtast Vognmand'
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='refAftale'>Rammeaftale</label>
                  <input
                    type='text'
                    name='refAftale'
                    placeholder='Reference til rammeaftale'
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='kommentar'>Kommentar</label>
                  <input
                    type='text'
                    name='kommentar'
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
                  <label htmlFor='alarmDato'>Alarmdato</label>
                  <input
                    type='date'
                    name='alarmDato'
                    placeholder='Vælg dato'
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='alarmTid'>Alarmtidspunkt</label>
                  <input
                    type='time'
                    name='alarmTid'
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
