import React, { useContext, useEffect } from 'react';
import Table from '../components/table';
import ContextGeneral from '../context/contextGeneral';

export default function CardCheckout() {
  const { cart, total, setTotal } = useContext(ContextGeneral);
  useEffect(() => {
    const SumPrice = () => cart.reduce((acc, { price, quantity }) => {
      acc += (price * quantity);
      return acc;
    }, 0);
    setTotal(SumPrice());
  }, [cart, setTotal]);

  return (
    <section>
      <Table />
      <section className="container-pricesum">
        <p
          className="button container-pricesum__item"
          datatestid="customer_checkout__element-order-total-price"
        >
          {` Valor Total: R$ ${total.toFixed(2)}`.replace('.', ',')}
        </p>
      </section>
    </section>
  );
}
