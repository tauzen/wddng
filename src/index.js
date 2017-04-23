import React from 'react';
import ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import * as firebase from 'firebase';

import App from './components/App';
import './index.css';

import BookStore from './stores/BookStore';

useStrict(true);

firebase.initializeApp({
  apiKey: 'AIzaSyBYTCUKzXhl48rDVZIB66RFNmBDvB2gB6E',
  authDomain: 'wddng-books.firebaseapp.com',
  databaseURL: 'https://wddng-books.firebaseio.com',
  projectId: 'wddng-books',
  storageBucket: 'wddng-books.appspot.com',
  messagingSenderId: '495488837968',
});

const store = new BookStore(firebase.database());

ReactDOM.render(<App bookStore={store} />, document.getElementById('root'));
