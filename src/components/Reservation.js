import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import ReservationModel from '../models/ReservationModel';

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
            <p>{reservation.book.author}</p>
            <p>{reservation.book.title}</p>
            <button onClick={onCancelClicked}>Cancel Reservation</button>
          </div>}
      </div>
    );
  }
}

Reservation.propTypes = {
  notReservedCount: PropTypes.number.isRequired,
  onCancelClicked: PropTypes.func,
  reservation: PropTypes.instanceOf(ReservationModel),
  reservedCount: PropTypes.number.isRequired,
};

export default Reservation;
