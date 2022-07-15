import React from 'react';
import CardSellerOrders from '../templates/cardSellerOrders';
import CardHeader from '../templates/cardHeader';
import Banner from '../components/banner';

export default function SellerOrdersPage() {
  const userData = JSON.parse(localStorage.getItem('user'));
  return (
    <>
      <CardHeader
        userName={ userData.name }
      />
      <Banner namePage="Pedidos" />
      <CardSellerOrders />
    </>
  );
}
