import React from 'react';
import CardLogin from '../templates/cardLogin';

import './stylePages';
import logo from './stylePages/App-Delivery.png';

export default function LoginPage() {
  return (
    <section>
      <main className="container-page-login">
        <section className="container-page-login__items">
          <img className="container-page-login__logo" src={ logo } alt="logo" />
          <h1 className="container-page-login__title">Delivery App</h1>
          <i>Pediu, chegou!</i>
        </section>
        <section className="container-page-login__card">
          <CardLogin />
        </section>
      </main>
    </section>

  );
}
