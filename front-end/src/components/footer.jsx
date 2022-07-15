import React from 'react';
import logo from '../pages/stylePages/App-Delivery.png';

import './styleComponents';

export default function Footer() {
  return (
    <footer className="main-footer">
      <section className="container-footer__card-logo">
        <img className="footer__logo" src={ logo } alt="logo" />
        <p>Delivey App</p>
        <p className="copy">
          &copy;
          {new Date().getFullYear()}
        </p>
      </section>
      <section>
        <p className="container-footer__title">Desenvolvedores</p>
        <section className="container-footer__devs">
          <a href="https://www.linkedin.com/in/adriana-ms/" target="_blank" rel="noreferrer">Adriana</a>
          <a href="https://www.linkedin.com/in/camilla-del-guerso/" target="_blank" rel="noreferrer">Camilla</a>
          <a href="https://www.linkedin.com/in/danielscustodio/" target="_blank" rel="noreferrer">Daniel</a>
          <a href="www.google.com" alt="gitHub">Emmanuel</a>
          <a href="https://www.linkedin.com/in/joaovictorpaduam/" target="_blank" rel="noreferrer">João Victor</a>
        </section>
      </section>
    </footer>
  );
}
