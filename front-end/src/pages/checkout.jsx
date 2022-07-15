import React from 'react';
import Banner from '../components/banner';
import CardAddress from '../templates/cardAddress';
import CardCheckout from '../templates/cardCheckout';
import CardHeader from '../templates/cardHeader';

import './stylePages';

export default function Checkout() {
  const userData = JSON.parse(localStorage.getItem('user'));
  return (
    <main>
      <CardHeader
        userName={ userData.name }
      />
      <Banner namePage="Checkout" />
      <section className="container-page-checkout">
        <CardCheckout />
        <CardAddress />
      </section>
    </main>

  );
}
