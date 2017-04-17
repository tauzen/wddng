import React from 'react';
import ReactDOM from 'react-dom';
import { useStrict } from 'mobx';

import App from './components/App';
import './index.css';

import BookStore from './stores/BookStore';
import BookModel from './models/BookModel';

useStrict(true);

const b1 = new BookModel('Title', 'Author', false);
const b2 = new BookModel('Title2', 'Author2', false);

const store = new BookStore([b1, b2]);

ReactDOM.render(<App bookStore={store} />, document.getElementById('root'));
