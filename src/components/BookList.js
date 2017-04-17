import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import BookStore from '../stores/BookStore';
import BookModel from '../models/BookModel';


@observer
class BookList extends Component {
  render() {
    const { store } = this.props;
    const books = store.books.map(
      (b, i) => <BookListItem book={b} key={i}/>
    );

    return (
      <div>
        <p>{store.report}</p>
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
    const { book } = this.props;
    book.reserve();
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
