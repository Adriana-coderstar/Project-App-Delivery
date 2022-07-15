import React from 'react';
import PropTypes from 'prop-types';

export default function TextInput({
  name,
  type,
  value,
  dataTestId,
  className,
  onChange,
  placeholder,
  labelText,
}) {
  return (
    <label htmlFor={ name }>
      {labelText}
      <input
        className={ className }
        type={ type }
        name={ name }
        value={ value }
        id={ name }
        data-testid={ dataTestId }
        onChange={ onChange }
        placeholder={ placeholder }
      />
    </label>
  );
}

TextInput.propTypes = {
  className: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  dataTestId: PropTypes.string,
};

TextInput.defaultProps = {
  labelText: '',
  placeholder: '',
  dataTestId: '',
};
