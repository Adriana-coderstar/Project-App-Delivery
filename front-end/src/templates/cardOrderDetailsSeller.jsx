import React from 'react';
import PropTypes from 'prop-types';
import '../components/styleComponents';
import './styleTemplates';

export default function OrderDetailsSeller(props) {
  const [classStatus, setClassStatus] = React.useState(null);
  const {
    id,
    date,
    status,
    products,
    totalPrice,
    dataTestIdStatus,
    handleClick,
    disabledDispatch,
    disabledPreparing,
  } = props;
  const heads = [
    'Item',
    'Descrição',
    'Quantidade',
    'Valor Unitário',
    'Sub-Total',
  ];

  React.useEffect(() => {
    switch (status) {
    case 'Entregue':
      setClassStatus('item-delivery-check');
      break;
    case 'Pendente':
      setClassStatus('item-delivery-pending');
      break;
    case 'Preparando':
      setClassStatus('item-delivery-preparing');
      break;
    case 'Em Trânsito':
      setClassStatus('item-delivery-preparing-intransit');
      break;
    default:
      break;
    }
  }, [status]);
  if (id) {
    return (
      <section className="card-order-detail">
        <section className="order-details-info">
          <h3 data-testid="seller_order_details__element-order-details-label-order-id">
            {`Número do pedido: ${id}`}
          </h3>
          <h3
            data-testid="seller_order_details__element-order-details-label-order-date"
          >
            {`Realizado em:  ${date}`}
          </h3>
          <h3 data-testid={ dataTestIdStatus }>
            Status:
            <span className={ classStatus }>
              {' '}
              {status}
            </span>
            {' '}
          </h3>
        </section>
        <section className="container-tableItems">
          <table className="table-items">
            <thead className="table-items__thead-details">
              <tr>
                {heads.map((head, i) => (
                  <th key={ i }>{head}</th>
                ))}
              </tr>
            </thead>
            <tbody className="table-items__tbody">
              {products.map((product, i) => (
                <tr key={ product.id }>
                  <td
                    data-testid={
                      `seller_order_details__element-order-table-item-number-${i}`
                    }
                  >
                    {i + 1}
                  </td>
                  <td
                    data-testid={ `seller_order_details__element-order-table-name-${i}` }
                  >
                    {product.name}
                  </td>
                  <td
                    data-testid={
                      `seller_order_details__element-order-table-quantity-${i}`
                    }
                  >
                    {product.SalesProduct.quantity}
                  </td>
                  <td
                    data-testid={
                      `seller_order_details__element-order-table-sub-total-${i}`
                    }
                  >
                    {(1 * product.price).toFixed(2).replace('.', ',')}
                  </td>
                  <td
                    data-testid={ `seller_order_details__element-order-total-price-${i}` }
                  >
                    {(Number(product.price) * product.SalesProduct.quantity)
                      .toFixed(2)
                      .replace('.', ',')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="order-detail-buttons">
          <h3
            data-testid="seller_order_details__element-order-total-price"
            className="button container-pricesum__item"
          >
            {`Total: R$ ${Number(totalPrice).toFixed(2).replace('.', ',')}`}
          </h3>
          <button
            type="button"
            data-testid="seller_order_details__button-preparing-check"
            onClick={ handleClick }
            disabled={ disabledPreparing }
            className="button btn-status-order-details"
          >
            PREPARAR PEDIDO
          </button>
          <button
            type="button"
            data-testid="seller_order_details__button-dispatch-check"
            onClick={ handleClick }
            disabled={ disabledDispatch }
            className="button btn-status-order-details btn-status-order-details-dispatch"
          >
            SAIU PARA ENTREGA
          </button>
        </section>
      </section>
    );
  }
  return <h1>Sem retorno</h1>;
}

OrderDetailsSeller.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  disabledDispatch: PropTypes.func.isRequired,
  disabledPreparing: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.string,
      SalesProducts: PropTypes.objectOf(PropTypes.number),
    }),
  ).isRequired,
  dataTestIdStatus: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
