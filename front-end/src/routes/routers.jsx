import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import ProductsPage from '../pages/products';
import Checkout from '../pages/checkout';
import OrdersPage from '../pages/orders';
import OrderDetails from '../pages/orderDetails';
import SellerOrdersPage from '../pages/sellerOrder';
import SellerOrderDetailsPage from '../pages/sellerOrderDetails';

export default function Router() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={ <Navigate to="/login" /> }
      />
      <Route
        exact
        path="/login"
        element={ <LoginPage /> }
      />
      <Route
        exact
        path="/register"
        element={ <RegisterPage /> }
      />
      <Route path="/customer/orders/:id" element={ <OrderDetails /> } />
      <Route path="/customer/products" element={ <ProductsPage /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/customer/orders" element={ <OrdersPage /> } />
      <Route path="/seller/orders" element={ <SellerOrdersPage /> } />
      <Route path="/seller/orders/:id" element={ <SellerOrderDetailsPage /> } />

    </Routes>
  );
}
