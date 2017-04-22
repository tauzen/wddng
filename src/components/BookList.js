import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import BookStore from '../stores/BookStore';
import BookListItem from './BookListItem';

@observer class BookList extends Component {
  render() {
    const { store } = this.props;
    const cancelBtn = !store.reservation
      ? ''
      : <button onClick={store.cancelReservation}>Cancel Reservation</button>;
    const books = store.books.map(b => (
      <BookListItem
        book={b}
        key={b.id}
        onReservationClicked={() => store.makeReservation(b.id)}
        reservationPossible={!store.reservation}
      />
    ));

    return (
      <div>
        <p>{store.report}</p>
        {cancelBtn}
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
