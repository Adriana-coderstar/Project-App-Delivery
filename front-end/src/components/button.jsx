import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  dataTestId,
  handleClick,
  name,
  className,
  disabled,
  type,
  price,
}) {
  return (
    <button
      data-testid={ dataTestId }
      onClick={ handleClick }
      name={ name }
      className={ className }
      disabled={ disabled }
      type={ type === 'button' ? 'button' : 'submit' }
    >
      {name}
      {price}
    </button>
  );
}

Button.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string.isRequired,
  price: PropTypes.element,
};

Button.defaultProps = {
  disabled: false,
  price: null,
};
