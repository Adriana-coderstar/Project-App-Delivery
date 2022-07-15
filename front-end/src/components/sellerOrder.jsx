import React from 'react';
import PropTypes from 'prop-types';

import './styleComponents';

export default function SellerOrder({
  id, status, totalPrice, date, onClick, address }) {
  const [classStatus, setClassStatus] = React.useState(null);

  React.useEffect(() => {
    switch (status) {
    case 'Entregue':
      setClassStatus('button item-order__status item-order__delivery-check');
      break;
    case 'Pendente':
      setClassStatus('button item-order__status item-order__delivery-pending');
      break;
    case 'Preparando':
      setClassStatus('button item-order__status item-order__delivery-preparing');
      break;
    case 'Em Trânsito':
      setClassStatus('button item-order__status item-order__delivery-Intransit');
      break;
    default:
      break;
    }
  }, [status]);
  return (
    <button
      type="button"
      onClick={ onClick }
      className="button container-item-order-seller"
    >
      <section className="item-order__items">
        <section>
          <h3>Pedido</h3>
          <p
            data-testid={ `seller_orders__element-order-id-${id}` }
          >
            {id}
          </p>
        </section>
        <h3
          data-testid={ `seller_orders__element-delivery-status-${id}` }
          className={ classStatus }
        >
          {status}
        </h3>
        <section>
          <h3
            data-testid={ `seller_orders__element-order-date-${id}` }
          >
            {date}
          </h3>
          <h3
            data-testid={ `seller_orders__element-card-price-${id}` }
          >
            {totalPrice}
          </h3>
        </section>
      </section>

      <section className="item_order-seller-adress">
        <h4>
          {address}
        </h4>
      </section>
    </button>
  );
}

SellerOrder.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  address: PropTypes.string.isRequired,
};

SellerOrder.defaultProps = {
  onClick: () => {},
};
