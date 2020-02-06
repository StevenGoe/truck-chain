import React, { Component } from 'react';
import NavBar from './NavBar';
import { NavLink } from 'react-router-dom';
import './css/NewOrder.css';

class NewOrder extends Component {
  static defaultProps = {
    navbarSubMenu: true
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
              <NavLink className='NewOrder-Submenu-btn-create' to='/udbyder'>
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
          <thead className='NewOrder-Form-Thead-Pickup'>
            <tr>
              <td>
                <label htmlFor='hentAdresse'>Afhentningsadresse *</label>
                <input
                  type='text'
                  id='hentAdresse'
                  name='hentAdresse'
                  placeholder='Vælg adresse'
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='hentAdresse'>Afhentningsdato</label>
                <input
                  type='hentDato'
                  name='hentDato'
                  placeholder='Vælg dato'
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='hentAdresse'>Afhentningstidspunkt</label>
                <input type='hentTid' name='hentTid' placeholder='00:00' />
              </td>
            </tr>
          </thead>
          <thead className='NewOrder-Form-Thead-Pickup'>
            <tr>
              <td>
                <label htmlFor='levAdresse'>Leveringsadresse *</label>
                <input
                  type='text'
                  id='levAdresse'
                  name='levAdresse'
                  placeholder='Vælg adresse'
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='levDato'>Leveringsdato</label>
                <input type='levDato' name='levDato' placeholder='Vælg dato' />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='levTid'>Leveringstidspunkt</label>
                <input type='levTid' name='levTid' placeholder='00:00' />
              </td>
            </tr>
          </thead>
          <thead className='NewOrder-Form-Thead-Pickup'>
            <tr>
              <td>
                <label htmlFor='lastType'>Lasttype *</label>
                <input
                  type='text'
                  id='lastType'
                  name='lastType'
                  placeholder='Indtast lasttype'
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='lastvaegt'>Lastvægt *</label>
                <input
                  type='lastvaegt'
                  name='lastvaegt'
                  placeholder='Indtast vægt i tons'
                  required
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
                <label htmlFor='refAftale'>Rammeaftale</label>
                <input
                  type='refAftale'
                  name='refAftale'
                  placeholder='Reference til rammeaftale'
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='kommentar'>Kommentar</label>
                <input
                  type='kommentar'
                  name='kommentar'
                  placeholder='Yderligere kommentarer..'
                />
              </td>
            </tr>
          </thead>
          <thead className='NewOrder-Form-Thead-Pickup'>
            <tr>
              <td>
                <p>
                  Sæt tidsfrist for hvornår fragtaftalen senest skal være på
                  plads.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='alarmDato'>Alarmdato</label>
                <input
                  type='alarmDato'
                  name='alarmDato'
                  placeholder='Vælg dato'
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='alarmTid'>Alarmtidspunkt</label>
                <input type='alarmTid' name='alarmTid' placeholder='00:00' />
              </td>
            </tr>
          </thead>
        </form>
      </div>
    );
  }
}
// https://87nr6b.axshare.com/#id=q5rgz6&p=mine_udbud&c=1
export default NewOrder;
