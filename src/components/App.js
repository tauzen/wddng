import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import BookStore from '../stores/BookStore';
import BookList from './BookList';
import Reservation from './Reservation';
import Intro from './Intro';

import plane from '../img/plane.svg';
import './App.css';

@observer class App extends Component {
  render() {
    const store = this.props.bookStore;

    return (
      <div className="App">
        <div className="App-header">
          <Intro />
          <div className="planeSpacer"><img src={plane} alt="plane" /></div>
          <Reservation
            reservation={store.reservation}
            onCancelClicked={store.cancelReservation}
          />
          {store.reservation &&
            <div className="planeSpacer">
              <img src={plane} alt="plane" />
            </div>}
        </div>
        <BookList store={store} />
      </div>
    );
  }
}

App.propTypes = {
  bookStore: PropTypes.instanceOf(BookStore).isRequired,
};

export default App;
