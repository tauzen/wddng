import React from 'react';

import logo from '../img/logo.svg';
import plane from '../img/plane.svg';
import './Visuals.css';

export const Intro = () => (
  <div>
    <div>
      <div>
        <img src={logo} className="Intro-logo" alt="logo" />
        <h2>MK 03/06/2017</h2>
      </div>
      <div className="Intro-message">
        <p>Drodzy Goście!</p>
        <p>
          Będziemy wdzięczni, jeżeli zamiast kwiatów wręczycie nam książkę
          z dedykacją. Poniżej lista naszych inspiracji. Jeżeli zdecydujecie
          się na którąś pozycję, możecie ją zarezerwować 😊
        </p>
        <p className="Intro-signature">
          Do zobaczenia 3go czerwca!<br />Martyna i Krzysztof
        </p>
      </div>
    </div>
  </div>
);

export const PlaneSpacer = ({ direction }) => {
  const className = direction === 'right'
    ? 'PlaneSpacer PlaneSpacer-right'
    : 'PlaneSpacer PlaneSpacer-left';
  return (
    <div className={className}>
      <img src={plane} alt="plane" />
    </div>
  );
};
