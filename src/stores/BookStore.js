import { observable, computed, action } from 'mobx';

import ReservationModel from '../models/ReservationModel';

export default class BookStore {
  @observable books = [];

  @observable reservation = null;

  constructor(books, reservation) {
    this.books = books;
    this.reservation = reservation;
  }

  @computed get reservedCount() {
    return this.books.reduce((sum, book) => sum + (book.reserved ? 1 : 0), 0);
  }

  @computed get notReservedCount() {
    return this.books.length - this.reservedCount;
  }

  // TODO remove this, show reservation status in separate component
  @computed get report() {
    const reservationDesc = this.reservation
      ? `${this.reservation.book.author}, ${this.reservation.book.title}`
      : 'None';

    return (
      `Reserved books: ${this.reservedCount},\n` +
      `Free: ${this.notReservedCount},\n` +
      `Reservation: ${reservationDesc}`
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
