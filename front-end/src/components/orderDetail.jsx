/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './styleComponents';

export default function OrderDetail(props) {
  const [classStatus, setClassStatus] = React.useState(null);

  const {
    id,
    seller,
    date,
    status,
    products,
    totalPrice,
    dataTestIdStatus,
    handleClick,
    disabled,
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
          <h3 data-testid="customer_order_details__element-order-details-label-order-id">
            {`Número do pedido: ${id}`}
          </h3>
          <h3
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {`Vendedor(a): ${seller}`}
          </h3>
          <h3
            data-testid="customer_order_details__element-order-details-label-order-date"
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
                      `customer_order_details__element-order-table-item-number-${i}`
                    }
                  >
                    <span className="item-table-mobile">Item:&nbsp;</span>
                    {i + 1}
                  </td>
                  <td
                    data-testid={ `customer_order_details_element-order-table-name-${i}` }
                  >
                    <span className="item-table-mobile">Descrição:&nbsp;</span>
                    {product.name}
                  </td>
                  <td
                    data-testid={
                      `customer_order_details__element-order-table-quantity-${i}`
                    }
                  >
                    <span className="item-table-mobile">Quantidade:&nbsp;</span>
                    {product.SalesProduct.quantity}
                  </td>
                  <td
                    data-testid={
                      `customer_order_details__element-order-table-sub-total${i}`
                    }
                  >
                    <span className="item-table-mobile">Valor Unitário:&nbsp;</span>
                    {(1 * product.price).toFixed(2).replace('.', ',')}
                  </td>
                  <td
                    data-testid={ `customer_order_details_element-order-total-price${i}` }
                  >
                    <span className="item-table-mobile">Sub-total:&nbsp;</span>
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
            data-testid="customer_order_details__element-order-total-price"
            className="button container-pricesum__item"
          >
            {`Total: R$ ${Number(totalPrice).toFixed(2).replace('.', ',')}`}
          </h3>

          <button
            type="button"
            data-testid="customer_order_details__button-delivery-check"
            onClick={ handleClick }
            disabled={ disabled }
            className="button btn-status-order-details"
          >
            MARCAR COMO ENTREGUE
          </button>
        </section>
      </section>
    );
  }
  return <h1>Sem retorno</h1>;
}
OrderDetail.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  seller: PropTypes.string.isRequired,
  disabled: PropTypes.any.isRequired,
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
