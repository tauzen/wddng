import { observable, computed, action } from 'mobx';
import uuid from 'uuid';

import BookModel from '../models/BookModel';

export default class BookStore {
  FIREBASE_REF = '/books/';
  RESERVATION_ID_KEY = 'reservationId';

  database;
  @observable books = [];
  @observable reservationId = null;

  constructor(database) {
    this.database = database;
    this.reservationId = localStorage.getItem(this.RESERVATION_ID_KEY);

    this.database.ref(this.FIREBASE_REF).on('value', snapshot => {
      const booksData = snapshot.val();
      this.updateBooks(booksData);
    });
  }

  @computed get reservation() {
    if (!this.reservationId) {
      return null;
    }

    const reservedBook = this.books.find(
      b => b.reservationId === this.reservationId,
    );

    return reservedBook ? reservedBook : null;
  }

  @action updateBooks(booksData) {
    this.books = Object.keys(booksData).map(
      id =>
        new BookModel(
          id,
          booksData[id].author,
          booksData[id].title,
          booksData[id].reservationId,
        ),
    );
  }

  @action.bound updateReservationId(reservationId) {
    if (reservationId) {
      localStorage.setItem(this.RESERVATION_ID_KEY, reservationId);
      window.scrollTo(0, 0);
    } else {
      localStorage.removeItem(this.RESERVATION_ID_KEY);
    }

    this.reservationId = reservationId;
  }

  @action.bound makeReservation(bookId) {
    if (this.reservation) {
      return;
    }

    const book = this.books.find(b => b.id === bookId);
    if (book && !book.reserved) {
      const reservationId = uuid.v4();
      const reservationDate = new Date().toJSON();
      this.database
        .ref(`${this.FIREBASE_REF}${book.id}`)
        .update({ reservationId, reservationDate })
        .then(() => this.updateReservationId(reservationId));
    }
  }

  @action.bound cancelReservation() {
    if (!this.reservation) {
      return;
    }

    this.database
      .ref(`${this.FIREBASE_REF}${this.reservation.id}`)
      .update({ reservationId: null, reservationDate: null })
      .then(() => this.updateReservationId(null));
  }
}
