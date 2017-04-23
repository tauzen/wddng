import { observable, computed, action } from 'mobx';

import BookModel from '../models/BookModel';
import ReservationModel from '../models/ReservationModel';

export default class BookStore {
  FIREBASE_REF = '/books/';

  database;
  @observable books = [];
  @observable reservation = null;

  constructor(database) {
    this.database = database;

    this.database.ref(this.FIREBASE_REF).on('value', snapshot => {
      const booksData = snapshot.val();
      this.updateBooks(booksData);
    });
  }

  @computed get reservedCount() {
    return this.books.reduce((sum, book) => sum + (book.reserved ? 1 : 0), 0);
  }

  @computed get notReservedCount() {
    return this.books.length - this.reservedCount;
  }

  @action updateBooks(booksData) {
    this.books = Object.keys(booksData).map(
      id =>
        new BookModel(
          id,
          booksData[id].author,
          booksData[id].title,
          !!booksData[id].reservationId,
        ),
    );
  }

  @action.bound makeReservation(bookId) {
    if (this.reservation) {
      return;
    }

    const book = this.books.find(b => b.id === bookId);
    if (book && !book.reserved) {
      this.reservation = new ReservationModel('ownerId', book);
      book.reserve();
    }
  }

  @action.bound cancelReservation() {
    if (!this.reservation) {
      return;
    }

    this.reservation.book.cancelReservation();
    this.reservation = null;
  }
}
