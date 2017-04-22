export default class ReservationModel {
  ownerId;
  book;
  createdAt;

  constructor(ownerId, book) {
    this.ownerId = ownerId;
    this.book = book;
    this.createdAt = new Date();
  }
}
