import React from "react";

import logo from "../img/logo.png";
import "./Visuals.css";

export const Logo = () => (
  <div className="Intro-logo">
    <img src={logo} alt="logo" />
  </div>
);

export const Intro = () => (
  <div>
    <div className="Intro-message">
      <p>Drodzy Goście!</p>
      <p>
        Będziemy wdzięczni, jeżeli zamiast kwiatów wręczycie nam książkę z
        dedykacją. Poniżej lista naszych inspiracji. Jeżeli zdecydujecie się na
        którąś pozycję, możecie ją zarezerwować 😊
      </p>
      <p className="Intro-signature">
        Do zobaczenia 14go sierpnia!
        <br />
        Karolina i Maciek
      </p>
    </div>
  </div>
);

export const PlaneSpacer = ({ direction }) => {
  const className =
    direction === "right"
      ? "PlaneSpacer PlaneSpacer-right"
      : "PlaneSpacer PlaneSpacer-left";
  return <div className={className}></div>;
};
