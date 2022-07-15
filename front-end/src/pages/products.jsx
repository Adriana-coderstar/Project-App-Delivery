import React, { useState, useEffect } from 'react';
import CardHeader from '../templates/cardHeader';
import { getData } from '../helpers/api';
import CardProduct from '../templates/cardProduct';
import './stylePages';
import Banner from '../components/banner';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const userData = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    getData('/customer/products', userData.token)
      .then(({ data }) => setProducts(data));
    if (userData.role !== 'customer') {
      localStorage.removeItem('user');
    }
  }, [userData.role, userData.token]);

  return (
    <section>
      <main className="container-page-products">
        <CardHeader
          userName={ userData.name }
        />
        <Banner namePage="Produtos" />

        <section className="product-card-container__card">
          {products && products.map(({ name, urlImage, price, id }) => (
            <CardProduct
              name={ name }
              imageURL={ urlImage }
              price={ +price }
              id={ id }
              key={ id }
            />
          ))}
        </section>
      </main>
    </section>
  );
}
