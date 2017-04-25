import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import BookListItem from './BookListItem';
import Reservation from './Reservation';
import BookStore from '../stores/BookStore';

import './BookList.css';

@observer class BookList extends Component {
  render() {
    const { store } = this.props;
    const books = store.books.map(b => (
      <BookListItem
        book={b}
        key={b.id}
        onReservationClicked={() => store.makeReservation(b.id)}
        reservationPossible={!store.reservation}
      />
    ));

    return (
      <div className="BookList">
        <Reservation
          reservedCount={store.reservedCount}
          notReservedCount={store.notReservedCount}
          reservation={store.reservation}
          onCancelClicked={store.cancelReservation}
        />
        <ul>
          {books}
        </ul>
      </div>
    );
  }
}

BookList.propTypes = {
  store: PropTypes.instanceOf(BookStore).isRequired,
};

export default BookList;
