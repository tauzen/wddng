import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BookStore from '../stores/BookStore';
import BookList from './BookList';
import logo from '../img/logo.svg';
import plane from '../img/plane.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>MK 03/06/2017</h2>
          </div>
          <div className="App-intro">
            <p>Drodzy Goście!</p>
            <p>
              Będziemy wdzięczni, jeżeli zamiast kwiatów wręczycie nam książkę
              z dedykacją. Poniżej lista naszych inspiracji. Jeżeli zdecydujecie
              się na którąś pozycję, możecie ją zarezerwować 😊
            </p>
            <p className="sign">
              Do zobaczenia 3go czerwca!<br />Martyna i Krzysztof
            </p>
            <div className="planeSpacer"><img src={plane} alt="plane" /></div>
          </div>
        </div>
        <BookList store={this.props.bookStore} />
      </div>
    );
  }
}

App.propTypes = {
  bookStore: PropTypes.instanceOf(BookStore).isRequired,
};

export default App;
