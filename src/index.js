import React from 'react';
import ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import * as firebase from 'firebase';

import App from './components/App';
import './index.css';

import BookStore from './stores/BookStore';
import BookModel from './models/BookModel';

useStrict(true);

firebase.initializeApp({
  apiKey: 'AIzaSyBYTCUKzXhl48rDVZIB66RFNmBDvB2gB6E',
  authDomain: 'wddng-books.firebaseapp.com',
  databaseURL: 'https://wddng-books.firebaseio.com',
  projectId: 'wddng-books',
  storageBucket: 'wddng-books.appspot.com',
  messagingSenderId: '495488837968',
});

const b1 = new BookModel(1, 'George Orwell', 'Folwark zwierzęcy', false);
const b2 = new BookModel(2, 'Michaił Bułhakow', 'Mistrz i Małgorzata', false);

const store = new BookStore(firebase.database());

ReactDOM.render(<App bookStore={store} />, document.getElementById('root'));
