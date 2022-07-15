import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SellerOrder from '../components/sellerOrder';
import { getData } from '../helpers/api';

import './styleTemplates';

export default function CardSellersOrders() {
  const [orders, setOrders] = useState([]);
  const userData = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  useEffect(() => {
    async function getSales() {
      const { data } = await getData('/sales', userData.token);
      setOrders(data);
    }
    getSales();
  }, [userData.token]);
  return (
    <section className="card-orders">
      {orders.map((order) => (
        <SellerOrder
          key={ order.id }
          id={ order.id }
          status={ order.status }
          totalPrice={ `R$ ${order.totalPrice.replace('.', ',')}` }
          date={ order.saleDate.split('T')[0].split('-').reverse().join('/') }
          onClick={ () => navigate(`/seller/orders/${order.id}`) }
          address={ `${order.deliveryAddress} ${order.deliveryNumber}` }
        />
      ))}
    </section>
  );
}
