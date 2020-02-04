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
                <label htmlFor='hentAdresse'>Afhentningsadresse</label>
                <input
                  type='text'
                  id='hentAdresse'
                  name='hentAdresse'
                  placeholder='Vælg adresse'
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
                <label htmlFor='hentAdresse'>Leveringsadresse</label>
                <input
                  type='text'
                  id='hentAdresse'
                  name='hentAdresse'
                  placeholder='Vælg adresse'
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='hentAdresse'>Leveringsdato</label>
                <input
                  type='hentDato'
                  name='hentDato'
                  placeholder='Vælg dato'
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='hentAdresse'>Leveringstidspunkt</label>
                <input type='hentTid' name='hentTid' placeholder='00:00' />
              </td>
            </tr>
          </thead>
          <thead className='NewOrder-Form-Thead-Pickup'>
            <tr>
              <td>
                <label htmlFor='hentAdresse'>Lasttype</label>
                <input
                  type='text'
                  id='hentAdresse'
                  name='hentAdresse'
                  placeholder='Indtast lasttype'
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='hentAdresse'>Lastvægt</label>
                <input
                  type='hentDato'
                  name='hentDato'
                  placeholder='Indtast vægt i tons'
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='hentAdresse'>Vogntype</label>
                <input
                  type='hentTid'
                  name='hentTid'
                  placeholder='Indtast anhængertype'
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='hentAdresse'>Rammeaftale</label>
                <input
                  type='hentTid'
                  name='hentTid'
                  placeholder='Reference til rammeaftale'
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='hentAdresse'>Kommentar</label>
                <input
                  type='hentTid'
                  name='hentTid'
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
                <label htmlFor='hentAdresse'>Alarmdato</label>
                <input
                  type='hentDato'
                  name='hentDato'
                  placeholder='Vælg dato'
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='hentAdresse'>Alarmtidspunkt</label>
                <input type='hentTid' name='hentTid' placeholder='00:00' />
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
