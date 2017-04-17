import { observable, computed, autorun, action } from 'mobx';

import ReservationModel from '../models/ReservationModel';

export default class BookStore {
  @observable
  books = [];

  @observable
  reservation = null;

  constructor(books, reservation) {
    this.books = books;
    this.reservation = reservation;

    autorun(() => console.log(this.report));
  }

  @computed
  get reservedCount() {
    return this.books.reduce(
      (sum, book) => sum + (book.reserved ? 1 : 0),
      0
    );
  }

  @computed
  get notReservedCount() {
    return this.books.length - this.reservedCount;
  }

  @computed
  get report() {
    const reservationDesc = this.reservation ?
    `${this.reservation.book.author}, ` +
    `${this.reservation.book.title}` : 'None';

    return `Reserved books: ${this.reservedCount},\n` +
           `Free: ${this.notReservedCount},\n` +
           `Reservation: ${reservationDesc}`;
  }

  @action
  makeReservation(bookId) {
    console.log(bookId);
    if(this.reservation) {
      return;
    }

    const book = this.books.find((b) => b.id === bookId);
    if(book && !book.reserved) {
      this.reservation = new ReservationModel('ownerId', book);
      book.reserve();
    }
  }

  @action
  cancelReservation() {
    if(!this.reservation) {
      return;
    }

    this.reservation.book.cancelReservation();
    this.reservation = null;
  }
}
