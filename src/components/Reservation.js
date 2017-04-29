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
          <div>
            <span>Twoja rezerwacja to: </span>
            <span className="title">
              "{reservation.title}", {reservation.author}
            </span>
            &nbsp;
            <p>
              <button onClick={onCancelClicked}>jednak wolę coś innego</button>
            </p>
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
