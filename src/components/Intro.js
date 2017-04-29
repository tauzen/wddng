import React from 'react';

import logo from '../img/logo.svg';

const Intro = () => (
  <div>
    <div>
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>MK 03/06/2017</h2>
      </div>
      <div className="App-intro">
        <p>Drodzy Goście!</p>
        <p>
          Będziemy wdzięczni, jeżeli zamiast kwiatów wręczycie nam książkę
          z dedykacją. Poniżej lista naszych inspiracji. Jeżeli zdecydujecie
          się na którąś pozycję, możecie ją zarezerwować 😊
        </p>
        <p className="sign">
          Do zobaczenia 3go czerwca!<br />Martyna i Krzysztof
        </p>
      </div>
    </div>
  </div>
);

export default Intro;
