import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/button';
import TextInput from '../components/textInput';
import ContextGeneral from '../context/contextGeneral';

import '../components/styleComponents';
import './styleTemplates';

export default function CardProduct({ name, imageURL, price, id }) {
  const { cart, setCart } = useContext(ContextGeneral);
  const [quantity, setQuantity] = useState(0);
  const item = { id, price, name, imageURL };

  const handleProduts = (nameProduct, value) => {
    const newCart = cart.filter((it) => it.id !== item.id);
    switch (nameProduct) {
    case ('+'):
      setQuantity((prevState) => prevState + 1);
      setCart([...newCart, { ...item, quantity: (quantity + 1) }]);
      break;
    case ('-'):
      setQuantity((prevState) => prevState - 1);
      setCart([...newCart, { ...item, quantity: (quantity - 1) }]);
      if (quantity === 1) setCart(newCart);
      break;
    default:
      setQuantity(+value);
      setCart([...newCart, { ...item, quantity: +value }]);
      if (+value === 0) setCart(newCart);
    }
  };

  return (
    <section className="product-card">
      <section className="product-card__price-image">
        <p
          data-testid={ `customer_products__element-card-price-${id}` }
          className="product-card__price"
        >
          { `R$ ${price.toFixed(2)}`.replace('.', ',') }
        </p>

        <img
          alt={ `Imagem do produto ${name}.` }
          src={ imageURL }
          className="product-card__image"
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          with="50px"
          height="150px"
        />
      </section>
      <section className="product-card__name-qtdy">
        <p
          className="product-card__name"
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          { name }
        </p>
        <div>
          <Button
            name="-"
            handleClick={ ({ target }) => handleProduts(target.name) }
            className=" button product-card__qtdy product-card__qtdy--subtraction"
            dataTestId={ `customer_products__button-card-rm-item-${id}` }
            type="button"
            disabled={ quantity <= 0 }
          />
          <TextInput
            className=" text-input product-card__input"
            name="quantity"
            onChange={ ({ target }) => handleProduts(target.name, target.value) }
            type="number"
            value={ quantity }
            dataTestId={ `customer_products__input-card-quantity-${id}` }
          />
          <Button
            name="+"
            handleClick={ ({ target }) => handleProduts(target.name) }
            className=" button product-card__qtdy product-card__qtdy--sum"
            dataTestId={ `customer_products__button-card-add-item-${id}` }
            type="button"
          />
        </div>
      </section>
    </section>
  );
}

CardProduct.propTypes = {
  id: PropTypes.number.isRequired,
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
