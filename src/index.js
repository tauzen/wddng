import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import App from './App';
import './index.css';

const firebaseConfig = {
  apiKey: 'AIzaSyBYTCUKzXhl48rDVZIB66RFNmBDvB2gB6E',
  authDomain: 'wddng-books.firebaseapp.com',
  databaseURL: 'https://wddng-books.firebaseio.com',
  projectId: 'wddng-books',
  storageBucket: 'wddng-books.appspot.com',
  messagingSenderId: '495488837968'
};
firebase.initializeApp(firebaseConfig);
window.firebase = firebase;

const id = Math.round(Math.random() * 100);

const signIn = () => {
  firebase
    .auth()
    .signInAnonymously()
    .then(user => {
      console.log(user);
      window.user = user;
    })
    .catch(error => {
      console.error(error.code, error.message);
    });
};

const signOut = () => {
  firebase.auth().signOut().then(() => {
    console.log('sign out');
  });
};

const makeReservation = () => {
  firebase.database().ref('/reservations/' + id).set({
    title: 'Title',
    author: 'Author'
  });
};

ReactDOM.render(
  <App
    signIn={signIn}
    signOut={signOut}
    makeReservation={makeReservation}
    database={firebase.database()}
  />,
  document.getElementById('root')
);
