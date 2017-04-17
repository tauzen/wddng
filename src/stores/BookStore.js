import { observable, computed, autorun } from 'mobx';

export default class BookStore {
  @observable
  books = [];

  constructor(books) {
    this.books = books;
    autorun(() => console.log(this.report));
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

  @computed
  get report() {
    return `Reserved books: ${this.reservedCount} \n` +
           `Free: ${this.notReservedCount}`;
  }
}
