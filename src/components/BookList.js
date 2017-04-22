import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import BookStore from '../stores/BookStore';
import BookModel from '../models/BookModel';

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

@observer class BookListItem extends Component {
  render() {
    const { book, reservationPossible, onReservationClicked } = this.props;
    const className = book.reserved ? 'reserved' : '';
    const reservationBtn = book.reserved || !reservationPossible
      ? ''
      : <button onClick={onReservationClicked}>reserve</button>;

    return (
      <li className={className}>
        <p>{book.title}</p>
        <p>{book.author}</p>
        {reservationBtn}
      </li>
    );
  }
}

BookListItem.propTypes = {
  book: PropTypes.instanceOf(BookModel).isRequired,
  onReservationClicked: PropTypes.func.isRequired,
  reservationPossible: PropTypes.bool.isRequired,
};

export default BookList;
