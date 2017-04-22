import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import BookModel from '../models/BookModel';

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

export default BookListItem;
