import { observable, computed } from 'mobx';

export default class BookModel {
  id;
  author;
  title;
  @observable reservationId;

  constructor(id, author, title, reservationId) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.reservationId = reservationId;
  }

  @computed get reserved() {
    return !!this.reservationId;
  }
}
