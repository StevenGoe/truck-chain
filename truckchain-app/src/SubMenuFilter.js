import React, { Component } from 'react';
import './css/SubMenuFilter.css';

class SubMenuFilter extends Component {
  render() {
    return (
      <div className='SubMenuFilter'>
        <h5>Filter visning</h5>
        <form>
          <thead className='SubMenuFilter-Form-Thead'>
            <tr>
              <td>
                <label htmlFor='soegAdresse'>Afhentning</label>
                <input
                  type='text'
                  id='soegAdresse'
                  name='soegAdresse'
                  placeholder='Søg adresse'
                />
              </td>
            </tr>
          </thead>
          <thead className='SubMenuFilter-Form-Thead'>
            <tr>
              <td>
                <label htmlFor='soegLevering'>Levering</label>
                <input
                  type='text'
                  id='soegLevering'
                  name='soegLevering'
                  placeholder='Søg levering'
                />
              </td>
            </tr>
          </thead>
          <thead className='SubMenuFilter-Form-Thead'>
            <tr>
              <td>
                <label htmlFor='soegDato'>Dato</label>
                <input
                  type='date'
                  id='soegDato'
                  name='soegDato'
                  placeholder='Vælg dato'
                />
              </td>
            </tr>
          </thead>
          <thead className='SubMenuFilter-Form-Thead'>
            <tr>
              <td>
                <label htmlFor='soegLastspec'>Lastspecifikationer</label>
                <input
                  type='text'
                  id='soegLastspec'
                  name='soegLastspec'
                  placeholder='Vælg type'
                />
              </td>
            </tr>
          </thead>
          <thead className='SubMenuFilter-Form-Thead'>
            <tr>
              <td>
                <label htmlFor='soegLastvægt'>Lastvægt</label>
                <input
                  type='text'
                  id='soegLastvægt'
                  name='soegLastvægt'
                  placeholder='Vælg vægt'
                />
              </td>
            </tr>
          </thead>
          <thead className='SubMenuFilter-Form-Thead'>
            <tr>
              <td>
                <label htmlFor='soegUdbyder'>Udbyder</label>
                <input
                  type='text'
                  id='soegUdbyder'
                  name='soegUdbyder'
                  placeholder='Søg udbyder'
                />
              </td>
            </tr>
          </thead>
        </form>
      </div>
    );
  }
}

export default SubMenuFilter;
