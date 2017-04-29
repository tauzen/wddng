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
    const stats = `${notReservedCount}/${reservedCount + notReservedCount}`;

    return (
      <div className="Reservation">
        {reservation &&
          <p>
            <span>Twoja rezerwacja to: </span>
            <span className="title">
              "{reservation.title}", {reservation.author}
            </span>
            &nbsp;
            <button onClick={onCancelClicked}>jednak wolę coś innego</button>
          </p>}
          <p className="status">
            Wolne książki {stats}
          </p>
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
