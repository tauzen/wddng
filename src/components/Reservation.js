import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import BookModel from '../models/BookModel';

@observer class Reservation extends Component {
  render() {
    const { reservation, onCancelClicked } = this.props;

    return (
      <div>
        {reservation &&
          <div className="Reservation">
            <span>Twoja rezerwacja:</span>
            <p>
              <span className="title">"{reservation.title}"</span>,&nbsp;
              <span className="author">{reservation.author}</span>
            </p>
            <button onClick={onCancelClicked}>jednak wolę coś innego</button>
          </div>}
      </div>
    );
  }
}

Reservation.propTypes = {
  onCancelClicked: PropTypes.func,
  reservation: PropTypes.instanceOf(BookModel),
};

export default Reservation;
