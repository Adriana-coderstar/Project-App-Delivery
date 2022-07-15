import React, { useEffect } from 'react';
import CardOrders from '../templates/cardOrders';
import CardHeader from '../templates/cardHeader';
import './stylePages/index';
import Banner from '../components/banner';

export default function OrdersPage() {
  const userData = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (userData.role !== 'customer') {
      localStorage.removeItem('user');
    }
  }, [userData.role]);

  return (
    <main>
      <CardHeader
        userName={ userData.name }
      />
      <Banner namePage="Pedidos" />
      <CardOrders />
    </main>
  );
}
