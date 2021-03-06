import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import BookListItem from './BookListItem';
import BookStore from '../stores/BookStore';

import './BookList.css';

@observer class BookList extends Component {
  render() {
    const { store } = this.props;
    const books = store.books.map(b => (
      <BookListItem
        book={b}
        key={b.id}
        onReservationClicked={store.makeReservation}
        reservationPossible={!store.reservation}
      />
    ));

    return (
      <div className="BookList">
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
