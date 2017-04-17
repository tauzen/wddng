import { observable, action } from 'mobx';

export default class BookModel {
  author;
  title;
  @observable reserved;

  constructor(author, title, reserved) {
    this.author = author;
    this.title = title;
    this.reserved = reserved;
  }

  @action
  reserve() {
    if(!this.reserved) {
      this.reserved = true;
    }
  }

  @action
  cancelReservation() {
    if(this.reserved) {
      this.reserved = false;
    }
  }
}
