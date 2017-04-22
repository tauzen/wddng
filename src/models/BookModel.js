import { observable, action } from 'mobx';

export default class BookModel {
  id;
  author;
  title;
  @observable reserved;

  constructor(id, author, title, reserved) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.reserved = reserved;
  }

  @action.bound
  reserve() {
    if(!this.reserved) {
      this.reserved = true;
    }
  }

  @action.bound
  cancelReservation() {
    if(this.reserved) {
      this.reserved = false;
    }
  }
}
