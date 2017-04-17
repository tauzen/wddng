import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import BookStore from '../stores/BookStore';
import BookModel from '../models/BookModel';


@observer
class BookList extends Component {
  onReservationClicked = (id) => {
    this.props.store.makeReservation(id);
  }

  onCancelClicked = () => {
    this.props.store.cancelReservation();
  }

  render() {
    const { store } = this.props;
    const cancelBtn = !store.reservation ? '' :
      <button onClick={this.onCancelClicked}>Cancel Reservation</button>
    const books = store.books.map((b) =>
      <BookListItem
        book={b}
        key={b.id}
        onReservationClicked={this.onReservationClicked}
      />
    );

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
  store: PropTypes.instanceOf(BookStore).isRequired
}

@observer
class BookListItem extends Component {
  onReservationClicked = () => {
    const { book, onReservationClicked } = this.props;
    onReservationClicked(book.id);
  }

  render() {
    const { book } = this.props;
    const className = book.reserved ? 'reserved' : ''
    const reservationBtn = book.reserved ? '' :
      <button onClick={this.onReservationClicked}>reserve</button>;

    return (
      <li className={className}>
        <p>{book.title}</p>
        <p>{book.author}</p>
        {reservationBtn}
      </li>
    )
  }
}

BookListItem.propTypes = {
  book: PropTypes.instanceOf(BookModel).isRequired
}

export default BookList;
