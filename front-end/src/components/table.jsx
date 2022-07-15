import React, { useContext } from 'react';
import ContextGeneral from '../context/contextGeneral';
import Button from './button';

import './styleComponents';

export default function Table() {
  const { cart, setCart } = useContext(ContextGeneral);
  const heads = ['Item',
    'Descrição',
    'Quantidade',
    'Valor Unitário',
    'Sub-Total',
    'Remover Item'];
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <section className="container-tableItems">
      <table className="table-items">
        <thead className="table-items__thead">
          <tr>
            {heads.map((head, i) => (
              <th
                key={ i }
              >
                {head}

              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table-items__tbody">
          {cart.map((sale, i) => (
            <tr
              key={ sale.id }
            >
              <td
                data-testid={ `customer_checkout__element-order-table-item-number-${i}` }
              >
                <span className="item-table-mobile">Item:&nbsp;</span>
                {i + 1}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${i}` }
              >
                <span className="item-table-mobile">Descrição:&nbsp;</span>
                {sale.name}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
              >
                <span className="item-table-mobile">Quantidade:&nbsp;</span>
                {sale.quantity}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
              >
                <span className="item-table-mobile">Valor Unitário:&nbsp;</span>
                {sale.price.toFixed(2).replace('.', ',')}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
              >
                <span className="item-table-mobile">Sub-total:&nbsp;</span>
                {(sale.price * sale.quantity).toFixed(2).replace('.', ',')}
              </td>
              <td>
                <Button
                  name="Remover"
                  handleClick={ () => removeFromCart(sale.id) }
                  className="button table-items__btn-remove"
                  dataTestId={ `customer_checkout__element-order-table-remove-${i}` }
                  type="button"
                />
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
