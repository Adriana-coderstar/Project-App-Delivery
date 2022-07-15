import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextGeneral from '../context/contextGeneral';

export default function ProviderGeneral({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('cart'));
    return localCart ? setCart(localCart)
      : localStorage.setItem('cart', JSON.stringify([]));
  }, []);

  useEffect(() => cart && localStorage.setItem('cart', JSON.stringify(cart)), [cart]);

  const context = { cart, setCart, total, setTotal };

  return (
    <ContextGeneral.Provider value={ context }>
      { children }
    </ContextGeneral.Provider>
  );
}

ProviderGeneral.propTypes = {
  children: PropTypes.node.isRequired,
};
