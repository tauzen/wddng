import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";

import BookStore from "../stores/BookStore";
import BookList from "./BookList";
import Reservation from "./Reservation";
import { Logo, Intro, PlaneSpacer } from "./Visuals";

import "./App.css";

@observer
class App extends Component {
  render() {
    const store = this.props.bookStore;

    return (
      <div className="App">
        <Logo />
        <div className="App-header">
          <Intro />
          <PlaneSpacer />
          <Reservation
            reservation={store.reservation}
            onCancelClicked={store.cancelReservation}
          />
          {store.reservation && <PlaneSpacer direction="right" />}
        </div>
        <BookList store={store} />
      </div>
    );
  }
}

App.propTypes = {
  bookStore: PropTypes.instanceOf(BookStore).isRequired,
};

export default App;
