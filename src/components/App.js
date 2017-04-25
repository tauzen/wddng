import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BookStore from '../stores/BookStore';
import BookList from './BookList';
import logo from '../img/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>MK 03/06/2017</h3>
        </div>
        <BookList store={this.props.bookStore} className="App-intro" />
      </div>
    );
  }
}

App.propTypes = {
  bookStore: PropTypes.instanceOf(BookStore).isRequired,
};

export default App;
