import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderDetail from '../components/orderDetail';
import { getData, updateRequest } from '../helpers/api';
// import { updateRequest } from '../helpers/api'

export default function CardSaleDetails() {
  const [order, setOrder] = useState(null);
  const { id } = useParams();
  const userData = JSON.parse(localStorage.getItem('user'));
  const a = 'customer_order_details__element-order-details-label-delivery-status';
  const [updated, setUpdated] = useState(false);

  const handleClick = async () => {
    const statusUp = await updateRequest(`/sale/${id}`, {
      status: 'Entregue',
    });
    setUpdated(statusUp);
  };

  useEffect(() => {
    async function getSale() {
      const { data } = await getData(`/sale/${id}`, userData.token);
      setOrder(data);
    }
    getSale();
  }, [id, userData.token, updated]);

  if (order) {
    return (
      <OrderDetail
        id={ order.id }
        seller={ order.seller.name }
        date={ order.saleDate.split('T')[0].split('-').reverse().join('/') }
        handleClick={ handleClick }
        status={ order.status }
        products={ order.products }
        totalPrice={ order.totalPrice }
        dataTestIdStatus={ a }
        disabled={ order.status === 'Pendente' }
      />
    );
  }

  return null;
}
