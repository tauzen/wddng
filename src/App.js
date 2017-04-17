import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from './logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    props.database.ref('/reservations/').on('value', snapshot => {
      console.log(snapshot);
      this.setState({
        reservations: Object.keys(snapshot.val())
      });
    });

    this.state = {
      reservations: [12, 21]
    };
  }

  render() {
    const { signIn, signOut, makeReservation } = this.props;
    const { reservations } = this.state;
    const list = reservations.map((item, idx) => {
      return <p key={idx}>{item}</p>;
    });
    console.log(list);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>MK 03/06/2017</h3>
        </div>
        <p className="App-intro">
          in progress
        </p>
        <button onClick={signIn}>Sign In</button>
        <button onClick={signOut}>Sign Out</button>
        <button onClick={makeReservation}>Make Reservation</button>
        {list}
      </div>
    );
  }
}

App.PropTypes = {
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired
};

export default App;
