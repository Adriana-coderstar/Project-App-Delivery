import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import TextInput from '../components/textInput';
import Button from '../components/button';
import { postRequest } from '../helpers/api';

import '../components/styleComponents';
import './styleTemplates';

export default function CardLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedLogin, setFailedLogin] = useState(false);
  // const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function disabled() {
    const re = /\S+@\S+\.\S+/;
    const validEmail = re.test(email);
    const SIX = 6;

    if (validEmail && password.length >= SIX) {
      return false;
    }
    return true;
  }

  const loginClick = async (event) => {
    event.preventDefault();

    try {
      const { data } = await postRequest('/login', { email, password });
      localStorage.setItem('user', JSON.stringify(data.userData));
      setIsLogged(true);
      // if (user && user.role === 'customer') return navigate('/customer/products');
      // if (user && user.role === 'seller') return navigate('/seller/orders');
    } catch (error) {
      setFailedLogin(true);
      setIsLogged(false);
    }
  };

  useEffect(() => setFailedLogin(false), [email, password, setFailedLogin]);
  // useEffect(() => {
  //   const getUser = JSON.parse(localStorage.getItem('user'));
  //   setUser(getUser);
  // }, []);

  const getUser = JSON.parse(localStorage.getItem('user'));

  if (getUser || isLogged) {
    if (getUser.role === 'customer') return <Navigate to="/customer/products" />;
    if (getUser.role === 'seller') return <Navigate to="/seller/orders" />;
  }

  return (
    <section>
      <form className="login-card">
        <TextInput
          name="email"
          type="email"
          value={ email }
          placeholder="Email"
          labelText="Email: "
          onChange={ ({ target }) => setEmail(target.value) }
          dataTestId="common_login__input-email"
          className="text-input text-input__login"
        />
        <TextInput
          name="password"
          type="password"
          value={ password }
          placeholder="Password"
          labelText="Senha: "
          onChange={ ({ target }) => setPassword(target.value) }
          dataTestId="common_login__input-password"
          className="text-input text-input__login"

        />
        <Button
          handleClick={ loginClick }
          name="Login"
          className="button button__login button__login--acess"
          disabled={ disabled() }
          type="submit"
          dataTestId="common_login__button-login"
        />
        <Button
          handleClick={ () => navigate('/register') }
          name="Criar Conta"
          className="button button__login button__login--register"
          type="button"
          dataTestId="common_login__button-register"
        />
        {
          failedLogin && (
            <p data-testid="common_login__element-invalid-email">
              Dados inválidos!
            </p>
          )
        }
      </form>
    </section>
  );
}
