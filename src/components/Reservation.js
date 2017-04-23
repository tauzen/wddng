import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import BookModel from '../models/BookModel';

@observer class Reservation extends Component {
  render() {
    const {
      reservedCount,
      notReservedCount,
      reservation,
      onCancelClicked,
    } = this.props;

    return (
      <div>
        <p>Reserved: {reservedCount}</p>
        <p>Free: {notReservedCount}</p>
        {reservation &&
          <div>
            <p>{reservation.author}</p>
            <p>{reservation.title}</p>
            <button onClick={onCancelClicked}>Cancel Reservation</button>
          </div>}
      </div>
    );
  }
}

Reservation.propTypes = {
  notReservedCount: PropTypes.number.isRequired,
  onCancelClicked: PropTypes.func,
  reservation: PropTypes.instanceOf(BookModel),
  reservedCount: PropTypes.number.isRequired,
};

export default Reservation;
