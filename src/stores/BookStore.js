import { observable, computed } from 'mobx';

export default class BookStore {
  @observable
  books = [];

  constructor(books) {
    this.books = books;
  }

  @computed
  get reservedCount() {
    return this.books.reduce(
      (sum, book) => sum + (book.reserved ? 0 : 1),
      0
    );
  }

  @computed
  get notReservedCount() {
    return this.books.length - this.reservedCount;
  }
}
