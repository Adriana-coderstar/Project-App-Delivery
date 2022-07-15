import React from 'react';
import CardRegister from '../templates/cardRegister';

import './stylePages';
import logo from './stylePages/App-Delivery.png';

export default function RegisterPage() {
  return (
    <section>
      <main className="container-page-login">
        <section className="container-page-login__items">
          <img className="container-page-login__logo" src={ logo } alt="logo" />
          <h1 className="container-page-login__title">Delivery App</h1>
          <i>Pediu, chegou!</i>
        </section>
        <section className="container-page-login__card">
          <CardRegister />
        </section>
      </main>
    </section>

  );
}
