import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getData, updateRequest } from '../helpers/api';
import OrderDetailsSeller from './cardOrderDetailsSeller';
// import { updateRequest } from '../helpers/api'

export default function CardSellerOrdersDetails() {
  const [order, setOrder] = useState(null);
  const { id } = useParams();
  const userData = JSON.parse(localStorage.getItem('user'));
  const a = 'seller_order_details__element-order-details-label-delivery-status';
  const [updated, setUpdated] = useState(false);

  const handleClick = async (e) => {
    const button = e.target.innerText;
    if (button === 'PREPARAR PEDIDO') {
      const statusUp = await updateRequest(`/sale/${id}`, {
        status: 'Preparando',
      });
      setUpdated(statusUp);
    } else if (button === 'SAIU PARA ENTREGA') {
      const statusUp = await updateRequest(`/sale/${id}`, {
        status: 'Em Trânsito',
      });
      setUpdated(statusUp);
    }
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
      <OrderDetailsSeller
        id={ order.id }
        date={ order.saleDate.split('T')[0].split('-').reverse().join('/') }
        handleClick={ (e) => handleClick(e) }
        status={ order.status }
        products={ order.products }
        totalPrice={ order.totalPrice }
        dataTestIdStatus={ a }
        disabledDispatch={ order.status !== 'Preparando' }
        disabledPreparing={ order.status !== 'Pendente' }
      />
    );
  }

  return null;
}
